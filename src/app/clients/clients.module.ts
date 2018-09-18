import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientFormComponent } from './client-form/client-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClientsListComponent, ClientFormComponent]
})
export class ClientsModule { }
