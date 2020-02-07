import { Injectable } from '@angular/core';
import { Developer } from '../model/developer';
import { DEVELOPERS } from '../data/developer-data';

@Injectable()
export class DeveloperService {
    constructor() { }
 
  getDevelopers(): Developer[] {
    return DEVELOPERS;
  }
 
  getDevelopersByIdSorted(): Developer[] {
    return DEVELOPERS.sort((a, b) => a.id - b.id);
  }

  getDevelopersByPriceSorted(): Developer[] {
    return DEVELOPERS.sort((a, b) => b.price - a.price);
  }
 
  getDevelopersByName(name: string): Developer {
    return DEVELOPERS.find(developer => developer.name === name);
  }
}
