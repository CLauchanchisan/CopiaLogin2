/**import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private authService: AuthService) {}

  async login() {
    try {
      const user = await this.authService.login(this.email, this.password);
      console.log('Usuario logueado:', user);
      // Aquí puedes redirigir al usuario o mostrar un mensaje
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Maneja el error, muestra un mensaje, etc.
    }
  }

  async register() {
    try {
      const user = await this.authService.register(this.email, this.password);
      console.log('Usuario registrado:', user);
      // Aquí puedes redirigir al usuario o mostrar un mensaje
    } catch (error) {
      console.error('Error al registrarse:', error);
      // Maneja el error, muestra un mensaje, etc.
    }
  }
}
**/

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; // Importar Router
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email!: string;
  password!: string;
  successMessage: string = ''; // Agregar propiedad para el mensaje de éxito

  constructor(private authService: AuthService, private router: Router) {} // Inyectar Router

//   async login() {
//     try {
//       const user = await this.authService.login(this.email, this.password);
//       console.log('Usuario logueado:', user);
//       // Redirigir al usuario o mostrar un mensaje aquí

//       this.successMessage = '¡Usuario logueado con éxito!'; // Mensaje de éxito
//       // Aquí puedes redirigir al usuario o hacer lo que necesites

//         // Ocultar el mensaje después de 3 segundos
//       setTimeout(() => {
//         this.successMessage = '';
//       }, 3000);

//     } catch (error) {
//       console.error('Error al iniciar sesión:', error);
//       // Manejo de errores
//     }
//   }
// }

  async login() {
    try {
      const user = await this.authService.login(this.email, this.password);
      console.log('Usuario logueado:', user);

      // Redirigir al usuario a la página de clima
      this.router.navigate(['/weather']);

      this.successMessage = '¡Usuario logueado con éxito!'; // Mensaje de éxito
      // Ocultar el mensaje después de 3 segundos
      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
      
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Manejo de errores (puedes agregar un mensaje de error aquí si lo deseas)
    }
  }
}