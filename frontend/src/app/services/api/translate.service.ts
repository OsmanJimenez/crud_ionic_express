import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class TranslatesService {
  words = {
    module: ['módulos'],
    home: ['inicio'],
    login: ['inicio de sesión']

  }
}
