import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'atoms-button',
  template: `
  <button class="btn btn-primary" [type]="buttonType">{{buttonValue}}</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomsButtonComponent {
  @Input()
  buttonValue = '';

  @Input()
  buttonType = '';
}
