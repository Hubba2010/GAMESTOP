import { Component } from '@angular/core';
import { AuthService } from '../feature/services/auth.service';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  constructor(private authService: AuthService){}
}
