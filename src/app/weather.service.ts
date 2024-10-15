// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class WeatherService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.checkwx.com/'; // URL base

  constructor(private http: HttpClient) { }

  getWeather(icao: string, token: string): Observable<any> {
    const headers = { 'Authorization': `Bearer ${token}` }; // Asume que usas un token para la autorización
    return this.http.get(`${this.apiUrl}weather/icao/${icao}`, { headers });
  }
}
