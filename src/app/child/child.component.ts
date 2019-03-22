import { Component, Input, EventEmitter, Output, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnChanges {

  // Input car donnée provenant de l'extérieur
  @Input() dataFromParent: String;

  // Output car sera écouté de l'extérieur
  @Output() sendDataToParent = new EventEmitter<string>();

  _sendDataToParent(data: string) {
    this.sendDataToParent.emit(data);
  }

  ngOnChanges(changes: SimpleChanges) {
    // J'écoute les changements de ma propriété dataFromParent
    // bindée à dataFromChild dans le template de mon parent
    const dataFromParent: SimpleChange = changes.dataFromParent;
    if(dataFromParent.currentValue) {
      console.log('previous dataFromParent value: ', dataFromParent.previousValue);
      console.log('current dataFromParent value : ', dataFromParent.currentValue);
      console.log('---------------');
      this.dataFromParent = dataFromParent.currentValue;;
    }
  }
}
