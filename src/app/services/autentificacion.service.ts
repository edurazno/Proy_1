import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
const token_key = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  authentificationsState = new BehaviorSubject(false);

  constructor(
    private storage: Storage,
    private platform: Platform
  ) {
    this.platform.ready().then(() => {
      this.checkToken();
    });
  }

  login() {
    return this.storage.set(token_key, 'Daniel 1234')
      .then(res => {
        this.authentificationsState.next(true);
      });
  }
  logout() {
    return this.storage.set(token_key, 'Daniel 1234')
      .then(() => {
        this.authentificationsState.next(false);
      });
  }
  isAuthentificated() {
    return this.authentificationsState.value;
  }
  checkToken() {
    return this.storage.get(token_key)
      .then(res => {
        if (res) {
          this.authentificationsState.next(true);
        }
      });
  }
}
