import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer.service';
import { Beer } from '../beer';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css'],
})
export class BeersListComponent implements OnInit {
  constructor(private beerService: BeerService) {}
  beersList: Beer[] = [];

  ngOnInit(): void {
    this.beerService.getBeers().subscribe((beers) => (this.beersList = beers));
  }

  displayPage(pageNb: number){
    this.beerService.getBeerPage(pageNb).subscribe((beers) => this.beersList = beers)
  }
}
