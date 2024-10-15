// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-weather',
//   templateUrl: './weather.component.html',
//   styleUrls: ['./weather.component.scss'],
// })
// export class WeatherComponent  implements OnInit {

//   constructor() { }

//   ngOnInit() {}

// }


import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
//conectar todo
import { AuthService } from '../auth.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
})
export class WeatherComponent implements OnInit {
  weatherData: any; // Variable para almacenar los datos del clima

  constructor(
    private weatherService: WeatherService, // Inyecta el servicio del clima
    private authService: AuthService // Inyecta el servicio de autenticación
  ) {}

//   ngOnInit(): void {
//     const icao = 'KJFK'; // Ejemplo de ICAO
//     const token = 'tu_token_aqui'; // Tu token de API

//     this.weatherService.getWeather(icao, token).subscribe(
//       data => {
//         this.weatherData = data;
//         console.log(this.weatherData);
//       },
//       error => {
//         console.error('Error al obtener datos del clima', error);
//       }
//     );
//   }
// }

ngOnInit(): void {
  this.getWeather(); // Llama al método para obtener el clima al inicializar el componente
}

getWeather(): void {
  const icao = 'KJFK'; // Cambia esto por el ICAO que desees consultar

  // Verifica si el usuario está autenticado
  this.authService.getUser().subscribe(user => {
    if (user) {
      user.getIdToken().then(token => { // Obtén el token del usuario autenticado
        this.weatherService.getWeather(icao, token).subscribe(
          data => {
            this.weatherData = data; // Asigna los datos recibidos a la variable
            console.log(this.weatherData); // Muestra los datos en la consola
          },
          error => {
            console.error('Error al obtener datos del clima', error); // Maneja el error
          }
        );
      });
    } else {
      console.error('Usuario no autenticado'); // Manejo si el usuario no está autenticado
    }
  });
}
}
