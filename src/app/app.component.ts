import {Component, OnInit} from '@angular/core';
import {Item} from "./shared/item.model";


// const messaging = firebase.messaging();
// messaging.usePublicVapidKey("BLICFO0PabFi1BNXyBf9XmXzE-hIcIJaVSBqmWX1F5cs6ijDaG-cJ4MAGA6ohLTSAftGJ0kpEZiCUghkIp-80q4");

// messaging.requestPermission().then(function() {
//   console.log('Notification permission granted.');
//   // TODO(developer): Retrieve an Instance ID token for use with FCM.
//   // ...
// }).catch(function(err) {
//   console.log('Unable to get permission to notify.', err);
// });

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{



  title = 'app';

    ngOnInit(): void {
    }

}

