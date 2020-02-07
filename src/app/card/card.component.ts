import { Component, OnInit } from '@angular/core';
import { Developer } from '../model/developer';
import { DeveloperService } from '../service/developer-service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  developers: Developer[] = [];
  
  constructor(service: DeveloperService) {
    this.developers = service.getDevelopersByPriceSorted();
   }

  ngOnInit() {
  }

}
