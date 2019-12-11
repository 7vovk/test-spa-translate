import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'atoms-paragraph-header',
  template: `
    <h4>
      {{paragraphHeaderText}}
    </h4>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomsParagraphHeaderComponent {
  @Input()
  paragraphHeaderText = '';
}
