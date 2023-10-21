import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  private _storage: Storage | null = null;

  constructor(private storage: Storage, private router: Router) { }

  async canActivate(): Promise<boolean> {
    const storage = await this.storage.create();
    this._storage = storage;
    return this._storage?.get(environment.localStorage).then((res) => {
      console.log(res.token)
      if (res?.token) {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
    });
  }
}
