import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from '.././top-menu/top-menu.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TopMenuComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
