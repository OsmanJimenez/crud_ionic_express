import { Injectable } from '@angular/core'
import { AlertController, LoadingController, ModalController } from '@ionic/angular'

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(
    private alertController: AlertController,
    public loadingController: LoadingController,
    private modalController: ModalController
  ) {}

  async statusAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: '',
      subHeader,
      message,
      buttons: ['Aceptar']
    })

    await alert.present()
  }

  async statusSuccessRegister(option: string) {
    const alert = await this.alertController.create({
      header: '',
      subHeader: 'Registro con éxito!',
      message: 'Se ha registrado ' + option + ' con éxito',
      buttons: ['Aceptar']
    })

    await alert.present()
  }

  async statusSuccessRegisterTwo(option: string) {
    const alert = await this.alertController.create({
      header: '',
      subHeader: 'Registro con éxito!',
      message: 'Se han registrado ' + option + ' con éxito',
      buttons: ['Aceptar']
    })

    await alert.present()
  }

  async statusSuccessInsert(option: string) {
    if (typeof option === 'object') {
      this.statusErrorServer()
    } else {
      const alert = await this.alertController.create({
        header: '',
        subHeader: 'Registro con éxito!',
        message: 'Se ha registrado ' + option + ' con éxito.',
        buttons: ['Aceptar']
      })

      await alert.present()
    }
  }

  async statusSuccessUpdate(option: string) {
    if (typeof option === 'object') {
      this.statusErrorServer()
    } else {
      const alert = await this.alertController.create({
        header: '',
        subHeader: 'Actualización con éxito!',
        message: 'Se ha actualizado ' + option + ' con éxito.',
        buttons: ['Aceptar']
      })

      await alert.present()
    }
  }

  async statusSuccessDelete(option: string) {
    if (typeof option === 'object') {
      this.statusErrorServer()
    } else {
      const alert = await this.alertController.create({
        header: '',
        subHeader: 'Eliminación con éxito!',
        message: 'Se ha eliminado ' + option + ' con éxito.',
        buttons: ['Aceptar']
      })

      await alert.present()
    }
  }

  async statusErrorUpdate(message: string) {
    if (typeof message === 'object') {
      this.statusErrorServer()
    } else {
      const alert = await this.alertController.create({
        header: '',
        subHeader: 'Registro fallido!',
        message: message + ', por favor vuelva a intentar.',
        buttons: ['Aceptar']
      })
      await alert.present()
    }
  }

  async statusMessage(message: string) {
    if (typeof message === 'object') {
      this.statusErrorServer()
    } else {
      const alert = await this.alertController.create({
        header: '',
        subHeader: 'Registro fallido!',
        cssClass: 'alert-medium',
        message: message,
        buttons: ['Aceptar']
      })
      await alert.present()
    }
  }

  async statusSuccessRegisterCloseModal(option: string) {
    const alert = await this.alertController.create({
      header: '',
      subHeader: 'Registro con éxito!',
      message: 'Se ha registrado ' + option + ' con éxito',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.closeModal()
          }
        }
      ]
    })

    await alert.present()
  }

  async statusMessageCloseModal(message: string) {
    if (typeof message === 'object') {
      this.statusErrorServer()
    } else {
      const alert = await this.alertController.create({
        header: '',
        subHeader: 'Registro fallido!',
        cssClass: 'alert-medium',
        message: message,
        backdropDismiss: false,
        buttons: [
          {
            text: 'Aceptar',
            handler: () => {
              this.closeModal()
            }
          }
        ]
      })
      await alert.present()
    }
  }

  async statusErrorLoad(message: string) {
    if (typeof message === 'object') {
      this.statusErrorServer()
    } else {
      const alert = await this.alertController.create({
        header: '',
        subHeader: 'Error al cargar!',
        message: message + ', por favor vuelva a intentar.',
        buttons: ['Aceptar']
      })

      await alert.present()
    }
  }

  async statusLoadFail(message: string) {
    if (typeof message === 'object') {
      this.statusErrorServer()
    } else {
      const alert = await this.alertController.create({
        header: '',
        subHeader: 'Error!',
        message: message + ' se encuentra con estado activo, por favor vuelva a intentar.',
        buttons: ['Aceptar']
      })

      await alert.present()
    }
  }

  async statusSuccessEmail(option: string) {
    const alert = await this.alertController.create({
      header: '',
      subHeader: 'Solicitud con éxito!',
      message: 'Se ha enviado ' + option + ' con éxito',
      buttons: ['Aceptar']
    })

    await alert.present()
  }

  async statusErrorServer() {
    // const alert = await this.alertController.create({
    //   header: '',
    //   subHeader: 'Error con Servidor!',
    //   message: 'Por favor, contacte a soporte.',
    //   buttons: ['Aceptar']
    // })
    // await alert.present()
  }

  async presentLoading() {
    this.loadingController
      .create({
        message: 'Espera por favor...',
        mode: 'ios',
        cssClass: 'custom-loading'
      })
      .then((res) => {
        res.present()
      })
  }

  async statusSuccessDeleteCloseModal() {
    const alert = await this.alertController.create({
      header: '',
      subHeader: 'Eliminación con éxito!',
      message: 'Se han eliminado las credenciales con éxito',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.closeModal()
          }
        }
      ]
    })

    await alert.present()
  }

  async dismiss() {
    setTimeout(() => {
      this.loadingController
        .dismiss()
        .then((res) => {})
        .catch((error) => {})
    }, 500)
  }

  async validateGender() {
    const alert = await this.alertController.create({
      header: '',
      subHeader: '',
      message:
        '<p>Disculpe, hemos detectado que se cambió el género del paciente indicado en el formulario</p><p>Se recomienda validar esta información en el formulario</p>',
      buttons: ['Aceptar']
    })

    await alert.present()
  }

  async statusSuccessRegisterRequest(title: string) {
    const alert = await this.alertController.create({
      header: '',
      subHeader: 'Registro con éxito!',
      message:
        'Solicitud realizada exitosamente, puede realizar seguimiento a esta solicitud desde el modulo de ' + title,
      buttons: ['Aceptar']
    })

    await alert.present()
  }

  async statusErrorLogin(message: string) {
    if (typeof message === 'object') {
      this.statusErrorServer()
    } else {
      const alert = await this.alertController.create({
        header: '',
        subHeader: 'Inicio de Sesión Fallido!',
        message: message + ', por favor vuelva a intentar.',
        buttons: ['Aceptar']
      })
      await alert.present()
    }
  }

  closeModal() {
    this.modalController.dismiss()
    window.location.reload()
  }
}
