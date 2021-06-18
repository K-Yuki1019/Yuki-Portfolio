import firebase from 'firebase/app';
import 'firebase/firestore';

export interface Article {
  title: string;
  articleId: string;
  createdAt: firebase.firestore.Timestamp;
  description: string;
  serviceURL: string;
  githubURL: string;
}
