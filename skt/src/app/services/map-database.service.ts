import { Injectable } from '@angular/core';
import { sus } from '../modal/maps.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Firestore, collectionData, collection, doc, setDoc, deleteDoc, docSnapshots } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class MapDatabaseService {


  constructor(private firestore: Firestore) {}

  getmaps(): Observable<sus[]> {
    console.log('sus')
    const contactsCollection = collection(this.firestore, 'maps');
    // this method returns a stream of documents mapped to their payload and id
    console.log('sus')
    return collectionData(contactsCollection, {idField: 'id'})
    .pipe(
      map(contacts => contacts as sus[])
    );
  }
}
