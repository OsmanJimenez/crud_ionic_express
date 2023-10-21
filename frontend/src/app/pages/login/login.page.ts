import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ApiService } from '@services/api/api.service';
import { EndpointsService } from '@services/api/endpoints.service';
import { InvalidFieldsService } from '@services/features/invalid-fields/invalid-fields.service';
import { VersionService } from '@services/features/version/version.service';
import { AlertService } from '@services/utils/alerts/alert.service';
import { ValidationService } from '@services/utils/validations/validation.service';
import { first } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup
  userLogin: any
  eyeImage: string = 'fas fa-eye-slash'
  typeInput: string = 'password'
  errorsMessages: string[] = []
  submitted: boolean = false
  private _storage: Storage | null = null
  rolModules = []
  version: string = environment.version
  date: string = environment.date
  options: string[] = []
  url = this.endpointsService.url

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    public loadingController: LoadingController,
    private storage: Storage,
    private validationService: ValidationService,
    private alertService: AlertService,
    private apiService: ApiService,
    public invalidFieldsService: InvalidFieldsService,
    private endpointsService: EndpointsService,
    private versionService: VersionService
  ) { }

  async ngOnInit() {
    this.validateForm()
    const storage = await this.storage.create()
    this._storage = storage
  }

  ionViewWillLeave() {
    this.submitted = false
    this.loginForm.reset()
  }

  changeImage() {
    if (this.eyeImage == 'fas fa-eye-slash') {
      this.eyeImage = 'fas fa-eye'
      this.typeInput = 'text'
      setTimeout(() => {
        this.eyeImage = 'fas fa-eye-slash'
        this.typeInput = 'password'
      }, 2000)
    } else {
      this.eyeImage = 'fas fa-eye-slash'
      this.typeInput = 'password'
    }
  }

  async logIn() {
    this.submitted = true;
    this._storage.set(environment.localStorage, null); // Limpia el almacenamiento local

    console.log(this.url.login);

    try {
      const res = await this.apiService.post(this.url.login, this.getData()).pipe(first()).toPromise();

      if (res.token) {
        await this._storage.set(environment.localStorage, res);
        this.router.navigate(['home']);
      } else {
        this.alertService.statusErrorLogin('Token no encontrado');
      }
    } catch (err) {
      this.alertService.statusErrorLogin(err);
    }
  }


  getData() {
    let data = this.loginForm.controls

    this.userLogin = {
      email: data.email.value,
      password: data.password.value,
    }

    return this.userLogin
  }

  validateForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [this.validationService.Validation(6, 50, 'onlyEmail')]],
      password: ['', Validators.compose([Validators.required])]
    })
  }

  get errorControl() {
    return this.loginForm.controls
  }
}