import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

/**
 * @title Input with a clear button
 */
@Component({
  selector: 'app-basic-input',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './basic-input.component.html',
  styleUrl: './basic-input.component.css',
})
export class BasicInputComponent {
  value = '';
  placeholder = 'Company name';
  isDisabled = false;
  hasFocus: boolean = false;
}
