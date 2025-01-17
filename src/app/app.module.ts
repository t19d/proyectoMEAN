import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CartasComponent } from './pages/cartas/cartas.component';
import { HttpClientModule } from '@angular/common/http';
import { CartaComponent } from './widgets/carta/carta.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cartas', component: CartasComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartasComponent,
    CartaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
