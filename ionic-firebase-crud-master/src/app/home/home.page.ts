import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { sus } from '../models/contact';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public contacts: Observable<sus[]>;

  constructor(
    private dataService: DataService,
    public modalController: ModalController
  ) {
    this.contacts = this.dataService.getContacts();
  }
}
