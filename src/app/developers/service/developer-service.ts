import { Injectable, EventEmitter } from '@angular/core';
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

  getDevelopersById(id: number): Developer {
    return DEVELOPERS.find(developer => developer.id === id);
  }

  getDevelopersByPriceSortedDESC(): Developer[] {
    return DEVELOPERS.sort((a, b) => b.price - a.price);
  }
 
  getDevelopersByPriceSortedASC(): Developer[] {
    return DEVELOPERS.sort((a, b) => a.price - b.price);
  }

  getDevelopersByName(name: string): Developer {
    return DEVELOPERS.find(developer => developer.name === name);
  }

  deleteDeveloperById(id: number)  {
    const dev = this.getDevelopersById(id);
    return DEVELOPERS.splice(DEVELOPERS.indexOf(dev), 1);
  }
}
