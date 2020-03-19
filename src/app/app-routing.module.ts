import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found-component.component';

const appRoutes = []
// const appRoutes: Routes = [
//   {
//     path: 'compose',
//     component: ComposeMessageComponent,
//     outlet: 'popup'
//   },
//   {
//     path: 'admin',
//     loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
//     canLoad: [AuthGuard]
//   },
//   {
//     path: 'crisis-center',
//     loadChildren: () => import('./crisis-center/crisis-center.module').then(m => m.CrisisCenterModule),
//     data: { preload: true }
//   },
//   { path: '', redirectTo: '/superheroes', pathMatch: 'full' },
//   { path: '**', component: PageNotFoundComponent }
// ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
