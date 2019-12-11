import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Items } from '../../select-items-class.componet';
import { SelectContentService } from '../../select-items.service';

@Component({
  selector: 'atoms-select',
  template: `
    <select class="btn btn-secondary dropdown-toggle btn-lg">
      <option *ngFor="let item of selectItems">{{ item.name }}</option>
    </select>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AtomsSelectComponent implements OnInit {
  @Input()
  selectItems: Items[];

  constructor(private selectContentService: SelectContentService) {}

  ngOnInit() {
    this.selectContentService
      .getContent()
      .subscribe(items => (this.selectItems = items));
  }

}
