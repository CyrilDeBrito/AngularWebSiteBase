import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Developer } from '../model/developer';
import { DeveloperService } from '../service/developer-service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  developers: Developer[] = [];
  
  constructor(private service: DeveloperService) {
    this.developers = service.getDevelopersByPriceSortedASC();
   }

  ngOnInit() {
  }

    delete(id: number) {
      this.service.deleteDeveloperById(id);
    }
}
