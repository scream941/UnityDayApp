import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {

  btnStatus = true;

  constructor() {
   }

  ngOnInit() {
  }

  onClickMainButton(event) {
    event.target.classList.toggle(`main-section-btn__active`);
    this.btnStatus = !this.btnStatus;
    console.log(this.btnStatus)
  }
}
