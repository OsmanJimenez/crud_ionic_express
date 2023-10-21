import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private storage_user: Storage | null = null;
  private httpOptions: { headers: HttpHeaders } = { headers: new HttpHeaders() };

  constructor(
    private http: HttpClient,
    private storage: Storage,
    public loadingController: LoadingController,
    private router: Router
  ) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this.storage_user = storage;
    const token = await this.storage_user.get(environment.localStorage);

    // Verifica si el token existe y configura el encabezado "Authorization" si es necesario
    if (token && token.token) {
      this.setAuthorizationHeader(token.token);
    }
  }

  private setAuthorizationHeader(token: string) {
    // Configura el encabezado "Authorization" con el token
    this.httpOptions.headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  private handleResponse(response: any) {
    if (response.hasOwnProperty('payload')) {
      return response.payload;
    }
    return response;
  }

  private handleErrors(res: HttpErrorResponse) {
    if (res.status === HttpStatusCode.InternalServerError) {
      return throwError(() => 'Algo está fallando en el servidor, por favor contacte a soporte');
    }
    if (res.status === HttpStatusCode.BadRequest) {
      console.error('Error message: ', res.error);
      return throwError(res.error);
    }
  }

  get(url) {
    return this.http.get<any>(`${environment.apiUrl}${url}`, this.httpOptions).pipe(
      catchError((res: HttpErrorResponse) => this.handleErrors(res)),
      map((response: any) => this.handleResponse(response))
    );
  }

  post(url, data) {
    this.presentLoading();

    const request = this.http.post<any>(`${environment.apiUrl}${url}`, data, this.httpOptions);

    return request.pipe(
      catchError((res: HttpErrorResponse) => {
        this.handleErrors(res);
        this.dismiss();
        return this.getCatchError(res);
      }),
      map((response: any) => {
        return this.handleResponse(response);
      }),
      tap(() => {
        this.dismiss();
      })
    );
  }

  put(url, data) {
    this.presentLoading();
    const request = this.http.put<any>(`${environment.apiUrl}${url}`, data, this.httpOptions);

    return request.pipe(
      catchError((res: HttpErrorResponse) => {
        this.handleErrors(res);
        this.dismiss();
        return this.getCatchError(res);
      }),
      map((response: any) => {
        return this.handleResponse(response);
      }),
      tap(() => {
        this.dismiss();
      })
    );
  }

  delete(url, value: number) {
    this.presentLoading();

    const request = this.http.delete<any>(`${environment.apiUrl}${url}/${value}`, this.httpOptions);

    return request.pipe(
      catchError((res: HttpErrorResponse) => {
        this.handleErrors(res);
        this.dismiss();
        return this.getCatchError(res);
      }),
      map((response: any) => {
        return this.handleResponse(response);
      }),
      tap(() => {
        this.dismiss();
      })
    );
  }

  logout() {
    this.storage_user?.remove(environment.localStorage);
    this.router.navigate(['login']);
  }

  async presentLoading() {
    this.loadingController
      .create({
        message: 'Espera por favor...',
        mode: 'ios',
        cssClass: 'custom-loading'
      })
      .then((res) => {
        res.present();
      });
  }

  async dismiss() {
    setTimeout(() => {
      this.loadingController
        .dismiss()
        .then((res) => { })
        .catch((error) => { });
    }, 500);
  }

  getCatchError(res) {
    if (res.status === HttpStatusCode.InternalServerError) {
      return throwError(() => 'Algo está fallando en el servidor, por favor contacte a soporte');
    }
    if (res.status === HttpStatusCode.BadRequest) {
      console.error('Error data: ', res.error);
      return throwError(res.error);
    }
  }
}
