import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() article!: Article;

  constructor() {}

  ngOnInit(): void {
    if (this.article == null) {
      throw new Error('[article] is required');
    }
    this.someFunc(this.article);
  }

  someFunc(article: Article) {}
}
