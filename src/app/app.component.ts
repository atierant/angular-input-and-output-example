import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = 'Angular 6';

  dataFromChild;

  /**
   * J'écoute les événements de l'event emitter de mon enfant
   */
  eventFromChild(data) {
    this.dataFromChild = data;
  }
}
