import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { AppCommonModule } from './common/common.module';

const routes: Routes = [
//  { path: '', redirectTo: 'clients', pathMatch: 'full'},
//  { path: 'clients', loadChildren: 'src/app/clients/clients.module#ClientsModule' },
  { path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      AppCommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }





