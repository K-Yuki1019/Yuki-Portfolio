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
    return this.db.doc(`article/${id}`).set({
      id,
      createdAt: firebase.firestore.Timestamp.now(),
      ...article,
    });
  }

  constructor(private db: AngularFirestore) {}
}
