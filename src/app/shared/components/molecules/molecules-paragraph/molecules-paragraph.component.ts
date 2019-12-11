import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'molecules-paragraph',
  template: `
  <div>
    <atoms-paragraph-header [paragraphHeaderText]="paragraphHeaderText"> </atoms-paragraph-header>
    <atoms-paragraph [paragraphText]="paragraphText"> </atoms-paragraph>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoleculesParagraphComponent {
  @Input()
  paragraphHeaderText = 'P header';

  @Input()
  paragraphText = 'p text';
}
