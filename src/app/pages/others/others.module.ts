import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {OthersComponent} from './others.component';
import {othersRoutes} from './others.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [
      MatButtonModule,
      MatCheckboxModule,
      BrowserAnimationsModule,
      CommonModule,
      FormsModule,
      RouterModule.forChild(othersRoutes)
  ],
  declarations: [
      OthersComponent
  ],
})
export class PizzaPartyAppModule { }
