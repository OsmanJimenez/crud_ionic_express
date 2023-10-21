import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { ErrorMessagesComponent } from './error-messages/error-messages.component';


registerLocaleData(es);

@NgModule({
  declarations: [
    ErrorMessagesComponent
  ],
  exports: [
    ErrorMessagesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class ComponentsModule { }
