import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, doc, setDoc, deleteDoc, docSnapshots } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { maps } from '../modal/maps.model';

@Injectable({
  providedIn: 'root'
})
export class MapDatabaseService {

  constructor(private firestore: Firestore) { }

}
