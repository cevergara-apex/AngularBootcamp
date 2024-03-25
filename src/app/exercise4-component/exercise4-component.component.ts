import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercise4-component',
  templateUrl: './exercise4-component.component.html',
  styleUrl: './exercise4-component.component.css'
})
export class Exercise4ComponentComponent {
  stringForDataBinding : string = "Hello World";
  triggerAlert() : void{
    alert("I was triggered by an event");
  }
  
}
