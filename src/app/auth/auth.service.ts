import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticate = false;

  login(user: string, password: string): boolean {
    const paramObject = { user, password };
    const data = JSON.parse(localStorage.getItem('authen'));
    const authen = data.filter((data) =>
      Object.is(JSON.stringify(data.username), JSON.stringify(user))
    )[0];

    if (authen) {
      if (user === authen.username && password === authen.password) {
        this.isAuthenticate = true;
        return this.isAuthenticate;
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Passwords Don't Match",
      });
      this.isAuthenticate = false;
      return this.isAuthenticate;
    }
  }
}
