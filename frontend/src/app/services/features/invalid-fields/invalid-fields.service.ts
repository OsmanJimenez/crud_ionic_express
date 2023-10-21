import { Injectable } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class InvalidFieldsService {
  constructor() {}

  showInvalidFields(form: FormGroup): void {
    form.markAllAsTouched()
    Object.keys(form.controls).forEach((key) => {
      const control = form.get(key)
      // Verificar si el control tiene el validador de requerido
      if (
        control.validator &&
        control.validator({} as FormControl)?.required &&
        control.status === 'DISABLED' &&
        !control.value
      ) {
        control.setErrors({ required: true })
      }
    })
  }
}
