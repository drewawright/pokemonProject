import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { 
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule, 
} from '@angular/material';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { PokemonIndexComponent } from './components/pokemon/pokemon-index/pokemon-index.component';
import { PokemonDetailComponent } from './components/pokemon/pokemon-detail/pokemon-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EmailFormComponent } from './components/about/email-form/email-form.component';
import { AppRoutingModule } from './app-routing.module';
import { PokemonService } from './services/pokemon-service';

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
    BrowserAnimationsModule,
    MatGridListModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
