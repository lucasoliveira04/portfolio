import {
  Component,
  OnInit,
  AfterViewInit,
  QueryList,
  ViewChildren,
  ElementRef,
  ChangeDetectorRef,
  DestroyRef,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

interface Link {
  type: 'playstore' | 'github' | 'website';
  url: string;
}

interface Client {
  name: string;
  period: string;
  role: string;
  techs: string[];
  description: string;
}

interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  techs: string[];
  links?: Link[];
  clients?: Client[];
}

@Component({
  selector: 'second-page',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './second-page.html',
  styleUrl: './second-page.css',
  animations: [
    trigger('cardEnter', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate(
          '500ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
    ]),
    trigger('clientsExpand', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-8px)' }),
        animate(
          '250ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ opacity: 0, transform: 'translateY(-8px)' }),
        ),
      ]),
    ]),
  ],
})
export class SecondPage implements OnInit, AfterViewInit {
  expandedClients: number | null = null;
  experiences: Experience[] = [];
  visibleCards = new Set<number>();

  @ViewChildren('cardRef') cardRefs!: QueryList<ElementRef>;

  private cardObserver: IntersectionObserver | null = null;
  private readonly translate = inject(TranslateService);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.loadExperiences();
    this.translate.onLangChange
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.loadExperiences());
  }

  ngAfterViewInit(): void {
    this.observeCards();
    this.cardRefs.changes.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.observeCards());
  }

  private observeCards(): void {
    this.cardObserver?.disconnect();

    this.cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset['index']);
            this.visibleCards.add(index);
            this.cdr.detectChanges();
            this.cardObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    this.cardRefs.forEach((ref) => this.cardObserver!.observe(ref.nativeElement));
  }

  private loadExperiences(): void {
    this.translate.get('EXPERIENCE.LIST').subscribe((list: Experience[]) => {
      this.experiences = list;

      const wasAlreadyVisible = this.visibleCards.size > 0;

      this.visibleCards = new Set<number>();
      this.cdr.detectChanges();

      if (wasAlreadyVisible) {
        list.forEach((_, i) => this.visibleCards.add(i));
        this.cdr.detectChanges();
      } else {
        this.observeCards();
      }
    });
  }

  toggleClients(index: number): void {
    this.expandedClients = this.expandedClients === index ? null : index;
  }
}
