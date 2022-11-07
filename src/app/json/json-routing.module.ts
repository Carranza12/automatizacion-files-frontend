import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonComponent } from './json.component';

const routes: Routes = [{ path: '', component: JsonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsonRoutingModule { }
