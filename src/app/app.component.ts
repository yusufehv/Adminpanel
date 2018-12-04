import { Component } from '@angular/core';
import {Login} from "./models/login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginInfo:Login = {
      first_name: 'Jeffrey Venerius',
      last_name: '',
      avatar: '',
      title: 'Lead Developer'
  };
}
