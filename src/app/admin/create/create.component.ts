import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  afUser$ = this.authService.afUser$;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
