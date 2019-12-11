import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'molecules-select',
  template: `
  <div class="d-flex justify-content-around">
    <atoms-select-label class="input-group-text" [selectLabel]="selectLabel"></atoms-select-label>
    <atoms-select></atoms-select>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoleculesSelectComponent {
  @Input()
  selectLabel = '';
}
