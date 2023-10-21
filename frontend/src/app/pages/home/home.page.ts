import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api/api.service';
import { EndpointsService } from '@services/api/endpoints.service';
import { first } from 'rxjs';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import { Observable } from 'rxjs';

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

}
