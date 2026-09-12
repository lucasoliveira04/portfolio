import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { ReadmeGallery } from './readme-gallery';
import { markdownForProfile, README_THEMES } from './readme-themes';

describe('README gallery', () => {
  let http: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadmeGallery],
      providers: [provideRouter([{ path: 'readmes', component: ReadmeGallery }]), provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('opens a shared theme URL and fetches that exact Markdown', async () => {
    const harness = await RouterTestingHarness.create();
    const page = await harness.navigateByUrl('/readmes?theme=blueprint', ReadmeGallery);
    expect(page.selected().id).toBe('blueprint');
    http.expectOne('/readme-lab/themes/blueprint/README.md').flush('![Mapa](../../assets/blueprint/hero.svg)');
    expect(page.content().markdown).toContain('./assets/blueprint/hero.svg');
    expect(page.content().loading).toBe(false);
  });

  it('rejects unknown URL values by selecting the fixed default', async () => {
    const harness = await RouterTestingHarness.create();
    const page = await harness.navigateByUrl('/readmes?theme=https://example.com', ReadmeGallery);
    expect(page.selected().id).toBe('animado');
    http.expectOne('/readme-lab/themes/animado/README.md').flush('# Lucas');
  });

  it('cancels a stale request when the user changes themes quickly', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/readmes?theme=terminal', ReadmeGallery);
    const stale = http.expectOne('/readme-lab/themes/terminal/README.md');
    const page = await harness.navigateByUrl('/readmes?theme=rpg', ReadmeGallery);
    expect(stale.cancelled).toBe(true);
    http.expectOne('/readme-lab/themes/rpg/README.md').flush('# RPG');
    expect(page.content().markdown).toBe('# RPG');
  });

  it('offers the file fallback when loading fails', async () => {
    const harness = await RouterTestingHarness.create();
    const page = await harness.navigateByUrl('/readmes?theme=jornal', ReadmeGallery);
    http.expectOne('/readme-lab/themes/jornal/README.md').flush('Unavailable', { status: 503, statusText: 'Unavailable' });
    expect(page.content().error).toBe(true);
    expect(page.content().loading).toBe(false);
  });

  it('rebases local profile paths while preserving public links', () => {
    expect(README_THEMES.length).toBe(10);
    expect(markdownForProfile('[tema](../../GALLERY.md) [Lucas](https://github.com/lucasoliveira04)'))
      .toBe('[tema](./GALLERY.md) [Lucas](https://github.com/lucasoliveira04)');
  });
});
