import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonDetailComponent } from './components/pokemon/pokemon-detail/pokemon-detail.component';
import { PokemonIndexComponent } from './components/pokemon/pokemon-index/pokemon-index.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'index', component: PokemonIndexComponent },
  { path: 'detail/:id', component: PokemonDetailComponent },
  { path: 'home', component: HomeComponent},
  { path: '**', component: HomeComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }