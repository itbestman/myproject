import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {

  @Input() nameChild?: string ='hi there';
  @Output() nameChildChange: EventEmitter<string> = new EventEmitter<string>();

  public changeName()
  {
    this.nameChild = 'vivek';
    this.nameChildChange.emit(this.nameChild);
  }
}
