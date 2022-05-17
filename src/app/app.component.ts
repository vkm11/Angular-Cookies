import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Cookies';

  constructor(private cookie:CookieService){}
  click(){
    console.log('hello');
    this.cookie.set("Userid","ABC");
    this.cookie.set("Usertype","Admin");
    // alert(this.cookie.get("Userid"));
    this.cookie.delete("Userid");
  }
}
