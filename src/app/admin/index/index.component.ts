import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  afUser$ = this.authService.afUser$;
  articles$: Observable<Article[]> = this.articleService.getArticles();

  constructor(
    private authService: AuthService,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {}
}
