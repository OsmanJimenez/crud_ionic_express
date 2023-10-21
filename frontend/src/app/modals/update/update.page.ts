import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ApiService } from '@services/api/api.service';
import { EndpointsService } from '@services/api/endpoints.service';
import { AlertService } from '@services/utils/alerts/alert.service';
import { ValidationService } from '@services/utils/validations/validation.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  @Input() data: any

  updateForm: FormGroup
  userLogin: any
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
    let data = this.updateForm.controls

    this.userLogin = {
      id: data.id.value,
      email: data.email.value,
      password: data.password.value,
      role: data.role.value
    }

    return this.userLogin
  }
  validateForm() {
    this.updateForm = this.formBuilder.group({
      id: [{ value: this.data.id, disabled: true }, Validators.compose([Validators.required])],
      email: [this.data.email, [this.validationService.Validation(6, 50, 'onlyEmail')]],
      password: [this.data.password, Validators.compose([Validators.required])],
      role: [this.data.role, Validators.compose([Validators.required])]
    })
  }

  get errorControl() {
    return this.updateForm.controls
  }
  async update() {
    await this.apiService
      .put(this.url.users, this.getData())
      .pipe(first())
      .subscribe(
        (res) => {
          this.success(res)
        },
        (err) => {
          this.alertService.statusErrorUpdate(err)
        }
      )
    this.closeModal()
  }

  success(res) {
    this.alertService.statusSuccessUpdate('el usuario')
  }

  closeModal() {
    this.modalController.dismiss()
  }

}
