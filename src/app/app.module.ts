import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { 
  MatToolbarModule,
  MatButtonModule 
} from '@angular/material';


import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material';
import { PokemonIndexComponent } from './components/pokemon/pokemon-index/pokemon-index.component';
import { PokemonDetailComponent } from './components/pokemon/pokemon-detail/pokemon-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EmailFormComponent } from './components/about/email-form/email-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonIndexComponent,
    PokemonDetailComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    EmailFormComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
