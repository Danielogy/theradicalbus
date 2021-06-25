import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  renderMenu() : void {
    const menu = document.querySelector('.menu');
    const line1 = document.querySelector('.line1');
    const line2 = document.querySelector('.line2');
    line1?.classList.toggle('burger-animation1');
    line2?.classList.toggle('burger-animation2');
    menu?.classList.toggle('active');
    const nav = document.querySelector('.nav');
    nav?.classList.toggle('active');
  }

  newPage(): void{
    const menu = document.querySelector('.menu');
    const line1 = document.querySelector('.line1');
    const line2 = document.querySelector('.line2');
    line1?.classList.remove('burger-animation1');
    line2?.classList.remove('burger-animation2');
    menu?.classList.remove('active');
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

}
