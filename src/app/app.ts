import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from "./child/child";
import {Home} from './home/home';

import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myproject');
  name = 'Manish Kumar Gupta';


  namechanged(name: string) {
  
    this.name = name;
  }
}
