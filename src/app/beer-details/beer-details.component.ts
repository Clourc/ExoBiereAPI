import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer.service';
import { ActivatedRoute } from '@angular/router';
import { Beer } from '../beer';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css'],
})
export class BeerDetailsComponent implements OnInit {
  constructor(
    private beerService: BeerService,
    private route: ActivatedRoute
  ) {}
  beer!: Beer;
  beerId: string | null = '';

  ngOnInit(): void {
    this.beerId = this.route.snapshot.paramMap.get('id');
    if (this.beerId === '0') {
      this.displayRandomBeer();
    } else {
      this.beerService.getBeer(this.beerId).subscribe((beer) => {
        this.beer = beer;
        console.log(this.beer);
      });
    }
  }

  displayRandomBeer() {
    this.beerService.getRandomBeer().subscribe((beer) => (this.beer = beer));
  }
}
