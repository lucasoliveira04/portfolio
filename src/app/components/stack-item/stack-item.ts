import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stack-item',
  templateUrl: './stack-item.html',
})
export class StackItem {
  @Input() name!: string;
  @Input() icon!: string;
}
