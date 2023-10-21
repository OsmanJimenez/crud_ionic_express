import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ApiService } from '@services/api/api.service';
import { EndpointsService } from '@services/api/endpoints.service';
import { AlertService } from '@services/utils/alerts/alert.service';
import { ValidationService } from '@services/utils/validations/validation.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  @Input() data: any

  createForm: FormGroup
  form: any
  errorsMessages: string[] = []
  rolModules = []
  url = this.endpointsService.url

  constructor(private modalController: ModalController, private endpointsService: EndpointsService, public formBuilder: FormBuilder,
    private validationService: ValidationService, private alertService: AlertService, private apiService: ApiService) { }

  ngOnInit() {
    console.log(this.data)
    this.validateForm()
  }

  getData() {
    let data = this.createForm.controls

    this.form = {
      email: data.email.value,
      password: data.password.value,
      role: data.role.value
    }

    return this.form
  }
  validateForm() {
    this.createForm = this.formBuilder.group({
      email: ['', [this.validationService.Validation(6, 50, 'onlyEmail')]],
      password: ['', Validators.compose([Validators.required])],
      role: ['', Validators.compose([Validators.required])]
    })
  }

  get errorControl() {
    return this.createForm.controls
  }
  async create() {
    await this.apiService
      .post(this.url.users, this.getData())
      .pipe(first())
      .subscribe(
        (res) => {
          this.success(res)
        },
        (err) => {
          this.alertService.statusSuccessRegister(err)
        }
      )
    this.closeModal()
  }

  success(res) {
    this.alertService.statusSuccessRegister('el usuario')
  }

  closeModal() {
    this.modalController.dismiss()
  }

}
