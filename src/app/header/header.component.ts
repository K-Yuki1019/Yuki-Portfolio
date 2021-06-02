import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  activatedTab = 'home';
  headerTabs = [
    { path: 'home', label: 'ホーム' },
    { path: 'about-me', label: '私について' },
    { path: 'products', label: '関わった制作物' },
    { path: 'contact', label: '連絡先' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
