import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api/api.service';
import { EndpointsService } from '@services/api/endpoints.service';
import { first, pipe } from 'rxjs';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import { AlertController, ModalController } from '@ionic/angular';
import { UpdatePage } from '@modals/update/update.page';
import { AlertService } from '@services/utils/alerts/alert.service';
import { CreatePage } from '@modals/create/create.page';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  url = this.endpointsService.url
  _storage = this.storage

  public configuration: Config;
  public columns: Columns[];
  public data = [];

  constructor(private apiService: ApiService,
    private endpointsService: EndpointsService,
    public modalController: ModalController,
    private alertService: AlertService,
    private alertController: AlertController,
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.loadData()

    this.columns = [
      { key: 'id', title: 'Id' },
      { key: 'email', title: 'Correo Electronico' },
      { key: 'role', title: 'Rol' },
      { key: 'role', title: 'Opciones' },
    ];
    this.data = [];
    this.configuration = { ...DefaultConfig };

  }

  loadData() {

    this.apiService
      .get(this.url.users)
      .pipe(first())
      .subscribe(
        (res) => {
          console.log(res)
          this.data = res
        },
        (err) => {
        }
      )
  }

  async alertDelete(id) {
    const alert = await this.alertController.create({
      header: '',
      subHeader: 'Alerta!',
      message: '¿Deseas eliminar el usuario?',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.delete(id)
          }
        }
      ]
    })

    await alert.present()
  }

  async delete(id) {
    await this.apiService
      .delete(this.url.users, id)
      .pipe(first())
      .subscribe(
        (res) => {
          this.success()
        },
        (err) => {
          this.alertService.statusErrorUpdate(err)
        }
      )
  }

  async createUser() {
    const modal = await this.modalController.create({
      component: CreatePage,
      backdropDismiss: false
    })

    modal.onDidDismiss().then(() => {
      this.loadData()
    })
    return await modal.present()
  }

  async editUser(data) {
    const modal = await this.modalController.create({
      component: UpdatePage,
      componentProps: {
        data: data
      },
      backdropDismiss: false
    })

    modal.onDidDismiss().then(() => {
      this.loadData()
    })
    return await modal.present()
  }

  success() {
    this.alertService.statusSuccessDelete('el usuario')
    this.loadData()
  }

  closeSession() {
    this._storage.set(environment.localStorage, null); // Limpia el almacenamiento local

    this.router.navigate(['login'])
  }

}
