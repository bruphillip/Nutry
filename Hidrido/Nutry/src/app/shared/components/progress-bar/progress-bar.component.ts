import { Component, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.component.html',
  styleUrls: ['progress-bar.component.scss']
})
export class ProgressBarComponent {
  // tslint:disable-next-line:no-input-rename
  @Input() progress;

  constructor() {}
}
