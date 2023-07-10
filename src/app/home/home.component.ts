import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from '.././top-menu/top-menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TopMenuComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
