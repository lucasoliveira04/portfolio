import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, distinctUntilChanged, map, of, startWith, switchMap } from 'rxjs';
import { README_THEMES, resolveReadmeTheme, markdownForProfile } from './readme-themes';

@Component({
  selector: 'app-readme-gallery',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './readme-gallery.html',
  styleUrl: './readme-gallery.css',
})
export class ReadmeGallery {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly http = inject(HttpClient);
  private readonly sanitizer = inject(DomSanitizer);
  readonly themes = README_THEMES;
  readonly query = toSignal(this.route.queryParamMap);
  readonly selected = computed(() => resolveReadmeTheme(this.query()?.get('theme') ?? null));
  readonly view = signal<'preview' | 'markdown'>('preview');
  readonly surface = signal<'light' | 'dark'>('dark');
  readonly copyStatus = signal('');
  readonly previewUrl = computed(() => {
    // Only IDs from the fixed theme registry can reach the resource URL.
    const path = `/readme-lab/previews/${this.selected().id}-${this.surface()}.html`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(path);
  });
  readonly content = toSignal(this.route.queryParamMap.pipe(
    map(params => resolveReadmeTheme(params.get('theme')).id),
    distinctUntilChanged(),
    switchMap(id => this.http.get(`/readme-lab/themes/${id}/README.md`, { responseType: 'text' }).pipe(
      map(source => ({ markdown: markdownForProfile(source), loading: false, error: false })),
      catchError(() => of({ markdown: '', loading: false, error: true })),
      startWith({ markdown: '', loading: true, error: false }),
    )),
  ), { initialValue: { markdown: '', loading: true, error: false } });

  selectTheme(id: string) {
    this.copyStatus.set('');
    void this.router.navigate([], { relativeTo: this.route, queryParams: { theme: resolveReadmeTheme(id).id }, queryParamsHandling: 'merge' });
  }

  async copyMarkdown() {
    if (this.content().loading || this.content().error) return;
    try {
      await navigator.clipboard.writeText(this.content().markdown);
      this.copyStatus.set('Markdown copiado!');
    } catch {
      this.copyStatus.set('Use “Baixar .md” para salvar o arquivo.');
    }
  }
}
