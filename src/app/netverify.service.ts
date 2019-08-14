import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NetverifyService {

  // headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });

  constructor(private http: HttpClient) {

   }
   getUrl(): Promise<any> {
     const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Basic ' + btoa(`${environment.username}:${environment.password}`)
     });
     console.log('header ', header);
     return new Promise<any>((resolve, reject) => {
      this.request(header, { url: environment.apiInit, method: 'POST' },
      { customerInternalReference: environment.customerInternalReference,
      userReference: environment.userReference })
      .then((response: HttpResponse<any>) => {
        resolve(response.body);
      }, (err) => reject(err));
     });
   }

   private request(headers: HttpHeaders, servicio: { url: string, method: string }, body?): Promise<HttpResponse<object>> {
    if (!body) {
      body = {};
    }

    return new Promise((resolve, reject) => {
      this.http.request(servicio.method, servicio.url,
        { body: body, headers, observe: 'response', responseType: 'json' })
        .subscribe(
          data => {
            resolve(data);
            // console.log('Respuesta de api ', data);
          },
          err => {
            console.log('Error ', err);
            reject(err);
          }
        );
    });
  }
}
