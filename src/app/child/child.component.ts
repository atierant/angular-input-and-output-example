import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit {
  @Input() dataFromParent: String;
  @Output() sendDataToParent = new EventEmitter<string>();

  ngOnInit() {
    console.log('This is data from parent', this.dataFromParent);
  }

  _sendDataToParent(data:string) {
    this.sendDataToParent.emit(data);
  }
}
