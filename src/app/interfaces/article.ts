import firebase from 'firebase/app';
import 'firebase/firestore';

export interface Article {
  title: string;
  description: string;
  serviceId: string;
  createdAt: firebase.firestore.Timestamp;
  sumbnailURL: string;
  serviceURL: string;
  articleId: string;
  userId: string;
}
