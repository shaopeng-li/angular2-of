import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  modalStatus: string;

  constructor() { }

  ngOnInit() {
    this.modalStatus = "none";
  }

  openModal () {
    this.modalStatus = "block";
  }

  closeModal () {
    this.modalStatus = "none";
  }

}
