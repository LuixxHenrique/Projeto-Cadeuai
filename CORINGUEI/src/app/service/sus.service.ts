import { Injectable } from '@angular/core';
import { collection, doc, Firestore, setDoc, deleteDoc } from '@angular/fire/firestore';
import { Produto } from '../modal/produto';

@Injectable({
  providedIn: 'root'
})
export class SusService {

  constructor(private firestore: Firestore) { }

  userSignUp(data: Produto) {
    const document = doc (collection(this.firestore, 'sus'));
    return setDoc(document, data);    
  }
}
