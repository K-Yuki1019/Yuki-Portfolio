import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Article } from '../interfaces/article';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  createArticle(
    article: Omit<Article, 'articleId' | 'createdAt'>
  ): Promise<void> {
    const id = this.db.createId();
    const articleValue: Article = {
      articleId: id,
      createdAt: firebase.firestore.Timestamp.now(),
      ...article,
    };
    return this.db.doc(`articles/${id}`).set(articleValue);
  }

  constructor(private db: AngularFirestore) {}
}
