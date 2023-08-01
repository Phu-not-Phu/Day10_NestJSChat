import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  User,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User | null = null;
  constructor(private auth: Auth) {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }

  loginWithGoogle() {
    let googleProvider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, googleProvider);
  }

  logOut() {
    return signOut(this.auth);
  }
}
