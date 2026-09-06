import { TestBed } from '@angular/core/testing';
import { provideTranslateService, TranslateParser, TranslateService } from '@ngx-translate/core';
import { PortfolioTranslateParser } from './portfolio-translate-parser';

describe('Portfolio translation visibility', () => {
  it('preserves boolean flags on experiences and nested clients through TranslateService', () => {
    TestBed.configureTestingModule({
      providers: [provideTranslateService({
        lang: 'pt',
        parser: { provide: TranslateParser, useClass: PortfolioTranslateParser },
      })],
    });
    const translate = TestBed.inject(TranslateService);
    // Match the JSON payload returned by the HTTP translation loader.
    translate.setTranslation('pt', JSON.parse(JSON.stringify({
      EXPERIENCE: { LIST: [
        { company: 'SMIT', visible: true, clients: [
          { name: 'Bow-e', visible: true },
          { name: 'Top Doc', visible: false },
        ] },
        { company: 'Game', visible: false },
        { company: 'Legacy' },
      ] },
      GREETING: 'Olá, {{name}}',
    })));

    const list = translate.instant('EXPERIENCE.LIST');
    expect(list[0].visible).toBe(true);
    expect(list[1].visible).toBe(false);
    expect(list[0].clients[1].visible).toBe(false);
    expect(list.filter((item: { visible?: boolean }) => item.visible !== false)
      .map((item: { company: string }) => item.company)).toEqual(['SMIT', 'Legacy']);
    expect(list[0].clients.filter((item: { visible?: boolean }) => item.visible !== false)
      .map((item: { name: string }) => item.name)).toEqual(['Bow-e']);
    expect(translate.instant('GREETING', { name: 'Lucas' })).toBe('Olá, Lucas');
  });
});
