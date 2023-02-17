import { Injectable } from '@angular/core';
import { maps } from '../modal/maps.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Firestore, collectionData, collection, doc, setDoc, deleteDoc, docSnapshots } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class MapDatabaseService {


  constructor(private firestore: Firestore) {}

  getmaps(): Observable<maps[]> {
    const contactsCollection = collection(this.firestore, 'maps');
    // this method returns a stream of documents mapped to their payload and id
    return collectionData(contactsCollection, {idField: 'id'})
    .pipe(
      map(contacts => contacts as maps[])
    );
  }
}
