import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
  url = {
    users: ['/user'],
    login: ['/user/login']
  }
}
