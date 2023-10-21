import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Platform } from '@ionic/angular'
import { Storage } from '@ionic/storage-angular'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  private _storage: Storage | null = null

  constructor(private router: Router, private storage: Storage, private platform: Platform) {
    this.init()
  }

  async init() {
    const storage = await this.storage.create()
    this._storage = storage
  }

  public checkAccess() {
    if (this.rev_version()) {
    } else {
      this.entrarApp()
    }
  }

  public rev_version() {
    return false
  }

  public async entrarApp() {
    await this._storage?.get(environment.localStorage).then((res) => {
      if (res != null) {
        this.router.navigate(['/home'])
      }
    })
  }
}
