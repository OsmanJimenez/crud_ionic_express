import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api/api.service';
import { EndpointsService } from '@services/api/endpoints.service';
import { first } from 'rxjs';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { UpdatePage } from '@modals/update/update.page';

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

  showModal() {

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

    modal.onDidDismiss().then(() => { })
    return await modal.present()
  }

  

}
