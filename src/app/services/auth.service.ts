import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // createUser(params: { email: string; password: string }) {
  //   this.afAuth
  //     .createUserWithEmailAndPassword(params.email, params.password)
  //     .then((result) => {
  //       result.user?.sendEmailVerification();
  //     })
  //     .catch((error) => {
  //       switch (error.code) {
  //         case 'auth/email-alreday-in-use':
  //           alert('このアドレスは既に登録されています');
  //           break;
  //         case 'auth/invalid-email':
  //           alert('アドレスが不正です');
  //           break;
  //       }
  //     });
  // }

  // resetPassword(email: string) {
  //   this.afAuth.sendPasswordResetEmail(email).catch((error) => {
  //     switch (error.code) {
  //       case 'auth/user-not-found':
  //         alert('そのメールアドレスのユーザーは見つかりません');
  //         break;

  //       case 'auth/wrong-password':
  //         alert('パスワードが間違っています');
  //         break;

  //       case 'auth/invalid-email':
  //         alert('メールアドレスが不正です');
  //         break;
  //     }
  //   });
  // }

  login(data: { email: string; password: string }) {
    this.afAuth
      .signInWithEmailAndPassword(data.email, data.password)
      .catch((error) => {
        switch (error.code) {
          case 'auth/user-not-found':
            alert('この先は管理者のみ閲覧可能です');
            break;
          case 'auth/wrong-password':
            alert('パスワードが間違っています');
            break;
          case 'auth/invalid-email':
            alert('メールアドレスが不正です');
            break;
        }
      });
  }
}
