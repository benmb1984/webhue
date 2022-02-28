import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() isActive = false;
  @Input() hasCloseButton = true;
  constructor() { }

  public closeModal() {
    this.isActive = false;
  }
}
