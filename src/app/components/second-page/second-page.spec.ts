import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { SecondPage } from './second-page';

const mockIntersectionObserver = class {
  observe = () => {};
  unobserve = () => {};
  disconnect = () => {};
};

describe('SecondPage', () => {
  let component: SecondPage;
  let fixture: ComponentFixture<SecondPage>;

  beforeEach(async () => {
    Object.defineProperty(window, 'IntersectionObserver', {
      writable: true,
      configurable: true,
      value: mockIntersectionObserver,
    });

    await TestBed.configureTestingModule({
      imports: [SecondPage],
      providers: [
        provideHttpClient(),
        provideAnimations(),
        provideTranslateService({
          loader: { provide: TranslateLoader, useValue: { getTranslation: () => of({}) } },
        }),
      ],
    }).compileComponents();

    const translate = TestBed.inject(TranslateService);
    translate.setTranslation('pt', { EXPERIENCE: { LIST: [] } });
    translate.use('pt');
    fixture = TestBed.createComponent(SecondPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
