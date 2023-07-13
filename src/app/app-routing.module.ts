import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeersListComponent } from './beers-list/beers-list.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';

const routes: Routes = [
  { path: 'beers', component: BeersListComponent },
  { path: 'beers/:id', component: BeerDetailsComponent },
  { path: '', redirectTo: 'beers', pathMatch: 'full' },
  { path: '**', redirectTo: 'beers' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
