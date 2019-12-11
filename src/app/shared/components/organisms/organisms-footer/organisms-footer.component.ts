import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'organisms-footer',
  template: `
  <div class="d-flex justify-content-center">

    <molecules-input class="col-md-4"
      [inputLabel]="inputLabel"
      [inputPlaceholder]="inputPlaceholder"
    ></molecules-input>

    <molecules-select class="col-md-2"
      [selectLabel]="selectLabel"
    ></molecules-select>

  </div>

    <atoms-button class="m-5 col-md-10" [buttonValue]="buttonValue" [buttonType]="buttonType"> </atoms-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganismsFooterComponent {

  @Input()
  inputLabel = '';

  @Input()
  inputPlaceholder = '';

  @Input()
  selectLabel = '';

  @Input()
  buttonValue = '';

  @Input()
  buttonType = '';
}
