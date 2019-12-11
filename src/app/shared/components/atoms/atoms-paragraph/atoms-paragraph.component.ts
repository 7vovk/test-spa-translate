import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'atoms-paragraph',
  template: `
    <p>
      {{paragraphText}}
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomsParagraphComponent {
  @Input()
  paragraphText = '';
}
