import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonRoutingModule } from './json-routing.module';
import { JsonComponent } from './json.component';

import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    JsonComponent
  ],
  imports: [
    CommonModule,
    JsonRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class JsonModule { }
