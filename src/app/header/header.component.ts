import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  afUser$ = this.authService.afUser$;

  activatedTab = 'home';
  headerTabs = [
    { path: '', label: 'ホーム' },
    { path: 'profile', label: '私について' },
    { path: 'works', label: '関わった制作物' },
    { path: 'contact', label: '連絡先' },
    { path: 'login', label: '管理者ページ' },
  ];

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {}
}
