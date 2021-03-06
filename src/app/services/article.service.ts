import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Article } from '../interfaces/article';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  getArticle(articleId: string) {
    return this.db.doc(`articles/${articleId}`);
  }

  getArticles(): Observable<Article[]> {
    return this.db
      .collection<Article>('articles', (ref) =>
        ref.orderBy('createdAt', 'desc').limit(10)
      )
      .valueChanges();
  }

  createArticle(
    article: Omit<Article, 'articleId' | 'createdAt' | 'updatedAt'>
  ): Promise<void> {
    const id = this.db.createId();
    const articleValue: Article = {
      articleId: id,
      createdAt: firebase.firestore.Timestamp.now(),
      updatedAt: firebase.firestore.Timestamp.now(),
      ...article,
    };
    return this.db.doc(`articles/${id}`).set(articleValue);
  }

  updateArticle(
    articleId: string,
    article: Omit<Article, 'articleId' | 'createdAt' | 'updatedAt'>
  ): Promise<void> {
    const targetArticle = {
      articleId,
      ...article,
      updatedAt: firebase.firestore.Timestamp.now(),
    };
    return this.db.doc(`articles/${articleId}`).update(targetArticle);
  }

  deleteArticle(article: Article): Promise<void> {
    return this.db.doc(`articles/${article.articleId}`).delete();
  }

  constructor(private db: AngularFirestore) {}
}
