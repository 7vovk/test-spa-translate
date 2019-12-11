import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'organisms-content',
  template: `
  <div class="col-md-6">
    <molecules-paragraph
      [paragraphHeaderText]="paragraphHeaderText1"
      [paragraphText]="paragraphText1"
    ></molecules-paragraph>
  </div>

  <div class="col-md-6">
    <molecules-paragraph
      [paragraphHeaderText]="paragraphHeaderText2"
      [paragraphText]="paragraphText2"
    ></molecules-paragraph>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganismsContentComponent {
  @Input()
  paragraphHeaderText1 = 'First paragraph heading';

  @Input()
  paragraphHeaderText2 = 'Second paragraph heading';

  @Input()
  paragraphText1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolore.' +
  'Necessitatibus incidunt perspiciatis nulla illum quasi, ullam eos eveniet officiis asperiores' +
  'atque, tenetur numquam est aspernatur explicabo molestiae quod officia?';

  @Input()
  paragraphText2 = 'Necessitatibus incidunt perspiciatis nulla illum quasi, ullam eos eveniet officiis asperiores' +
  'atque, tenetur numquam est aspernatur explicabo molestiae quod officia?';
}
