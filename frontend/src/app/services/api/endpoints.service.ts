import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
  url = {
    login: ['/user/login']
  }
}
