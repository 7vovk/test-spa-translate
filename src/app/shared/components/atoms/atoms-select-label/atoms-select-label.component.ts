import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'atoms-select-label',
  template: `
    <span>
      {{selectLabel}}
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomsSelectLabelComponent {
  @Input()
  selectLabel = '';
}
