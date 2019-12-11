import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ATOMS } from './components/atoms';
import { MOLECULES } from './components/molecules';
import { ORGANISMS } from './components/organisms';
import { SelectContentService } from './components/select-items.service';



@NgModule({
  declarations: [
    ATOMS,
    MOLECULES,
    ORGANISMS
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ATOMS,
    MOLECULES,
    ORGANISMS
  ],
  providers: [SelectContentService],
})
export class SharedModule { }
