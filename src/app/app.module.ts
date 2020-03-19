import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { MessagesComponent } from './messages/messages.component';
import { SearchComponent } from './search/search.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { MypipPipe } from './mypip.pipe';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found-component.component';

const router = [
  { path: '', redirectTo:'/dashboard',pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'detail', component: DetailComponent},
  { path: '**', component: NotfoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    DetailComponent,
    MessagesComponent,
    SearchComponent,
    NotfoundComponent,
    HighlightDirective,
    UnlessDirective,
    MypipPipe,
    ProfileEditorComponent,
    HeroFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
