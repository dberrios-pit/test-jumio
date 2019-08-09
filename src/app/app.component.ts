import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-jumio';
  /* window.addEventListener('message', receiveMessage, false);
  receiveMessage(event) {
    var data = JSON.parse(event.data);
    console.log(data);
    console.log('Netverify Web was loaded in an iframe.');
    console.log('auth token:', data.authorizationToken);
    console.log('transaction reference:', data.transactionReference);
    console.log('customer internal reference:', data.customerInternalReference);
    console.log('event type:', data.eventType);
    console.log('date-time:', data.dateTime);
    console.log('event value:', data.payload.value);
    console.log('event metainfo:', data.payload.metainfo);
  } */
}
