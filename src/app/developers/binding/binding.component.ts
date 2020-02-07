import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {

  message = 'hello world';
  source = 'hello world';


  constructor() { }

  ngOnInit() {
  }

  getSource() {
    return '../assets/img/personnage-png-300x300.png';
  }

  onClick(args: string) {
    this.message = args;
  }

}
