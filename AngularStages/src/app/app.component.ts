import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularStages';

  constructor(private router:Router){}
  public goToUsers(){
    this.router.navigate(['/', 'users']);
  }

  public goToHome(){
    this.router.navigate(['/', 'home']);
  }
}
