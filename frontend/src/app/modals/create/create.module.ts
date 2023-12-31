import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePageRoutingModule } from './create-routing.module';

import { CreatePage } from './create.page';
import { ComponentsModule } from '@components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CreatePageRoutingModule,
    ComponentsModule
  ],
  declarations: [CreatePage]
})
export class CreatePageModule {}
