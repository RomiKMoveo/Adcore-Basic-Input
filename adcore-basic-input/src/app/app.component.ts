import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicInputComponent } from './basic-input/basic-input.component';
import { CommentComponent } from './comment/comment.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BasicInputComponent, CommentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'adcore-basic-input';
}
