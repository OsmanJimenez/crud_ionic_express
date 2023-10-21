import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api/api.service';
import { EndpointsService } from '@services/api/endpoints.service';
import { first, pipe } from 'rxjs';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import { Observable } from 'rxjs';
import { AlertController, ModalController } from '@ionic/angular';
import { UpdatePage } from '@modals/update/update.page';
import { AlertService } from '@services/utils/alerts/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  url = this.endpointsService.url

  public configuration: Config;
  public columns: Columns[];
  public data = [];

  constructor(private apiService: ApiService,
    private endpointsService: EndpointsService,
    public modalController: ModalController,
    private alertService: AlertService,
    private alertController: AlertController

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
          role: 'cancel' // Este botón cerrará la alerta
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

  success() {
    this.alertService.statusSuccessDelete('el usuario')
    this.loadData()
  }

  async editUser(data) {
    const modal = await this.modalController.create({
      component: UpdatePage,
      cssClass: 'select-program',
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



}
