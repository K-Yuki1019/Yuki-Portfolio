import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isProcessing: boolean = false;
  afUser$ = this.afAuth.user;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

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
    this.isProcessing = true;
    console.log(data.email, data.password);
    this.afAuth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => this.succeededLogin())
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
            this.snackBar.open('メールアドレスが不正です', '閉じる');
            break;
          case 'auth/wrong-password':
            this.snackBar.open('パスワードが間違っています', '閉じる');
            break;
          case 'auth/user-not-found':
            this.snackBar.open('この先は管理者のみ閲覧可能です', '閉じる');
            break;
        }
        this.isProcessing = false;
      });
  }

  logout() {
    this.afAuth.signOut();
    this.snackBar.open('ログアウトしました', '閉じる');
    this.router.navigateByUrl('');
  }

  private succeededLogin() {
    this.router.navigateByUrl('/admin/create');
    this.snackBar.open('管理画面にログインしました!', '閉じる');
    this.isProcessing = false;
  }
}
