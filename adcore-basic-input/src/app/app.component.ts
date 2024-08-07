import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicInputComponent } from './basic-input/basic-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BasicInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'adcore-basic-input';
}
