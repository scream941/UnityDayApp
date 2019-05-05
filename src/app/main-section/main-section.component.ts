import { Component, OnInit } from '@angular/core';

const params = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' }
}

function sendBtnState(state) {
  return fetch('http://localhost:8080/save-state', {
    ...params,
    body: JSON.stringify({
      btnState: state,
    })
  })
}

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {

  btnState = true;

  constructor() {
   }

  ngOnInit() {
  }

  onClickMainButton(event) {
    event.target.classList.toggle(`main-section-btn__active`);
    this.btnState = !this.btnState;
    sendBtnState(this.btnState);
  }
}
