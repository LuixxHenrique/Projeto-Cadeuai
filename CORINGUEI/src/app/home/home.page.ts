import { Component } from '@angular/core';
import { SusService } from '../service/sus.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../modal/produto';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private sus: SusService, private router:Router, private route: ActivatedRoute) {}

  signUp(data:Produto): void {
    console.warn(data)
    this.sus.userSignUp(data);
    this.router.navigate(['/home'], {relativeTo: this.route});
  }

}
