import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  activatedTab = 'home';
  headerTabs = [
    { path: '', label: 'ホーム' },
    { path: 'profile', label: '私について' },
    { path: 'works', label: '関わった制作物' },
    { path: 'contact', label: '連絡先' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
