import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'atoms-header',
  template: `
    <h1>
      {{headerText}}
    </h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomsHeaderComponent {
  @Input()
  headerText = '';
}
