import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { Article } from 'src/app/interfaces/article';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/shared/delete-dialog/delete-dialog.component';

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
    private articleService: ArticleService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openDeleteDialog(article: Article) {
    this.dialog
      .open(DeleteDialogComponent, {
        maxWidth: '100vw',
        minWidth: '30%',
        autoFocus: false,
        data: { ...article },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.articleService.deleteArticle(result);
        } else {
          return;
        }
      });
  }
}
