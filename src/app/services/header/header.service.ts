import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  isVisible = signal(true);

  show() {
    this.isVisible.set(true);
  }
  hide() {
    this.isVisible.set(false);
  }
  toggle() {
    this.isVisible.update((v) => !v);
  }
}
