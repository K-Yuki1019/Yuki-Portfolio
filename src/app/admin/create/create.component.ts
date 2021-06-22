import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  afUser$ = this.authService.afUser$;
  isProgress = false;

  form = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    serviceURL: ['', [Validators.required]],
    githubURL: ['', []],
  });

  get title(): FormControl {
    return this.form.get('title') as FormControl;
  }

  get description(): FormControl {
    return this.form.get('description') as FormControl;
  }

  get serviceURL(): FormControl {
    return this.form.get('serviceURL') as FormControl;
  }

  get githubURL(): FormControl {
    return this.form.get('gtihubURL') as FormControl;
  }

  constructor(
    private authService: AuthService,
    private articleService: ArticleService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  submit() {
    this.isProgress = true;
    const value: Omit<Article, 'articleId' | 'createdAt'> = this.form.value;
    this.articleService
      .createArticle({
        title: value.title,
        description: value.description,
        serviceURL: value.serviceURL,
        githubURL: value.githubURL,
      })
      .then(() => {
        this.router.navigateByUrl('/'),
          this.snackBar.open('記事を投稿しました！', '閉じる');
      });
  }

  ngOnInit(): void {}
}
