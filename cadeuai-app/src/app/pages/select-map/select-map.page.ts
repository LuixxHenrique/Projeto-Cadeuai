import { Component, OnInit} from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-select-map',
  templateUrl: './select-map.page.html',
  styleUrls: ['./select-map.page.scss'],
})
export class SelectMapPage implements OnInit {

  constructor() { }

  async ngOnInit() { }
 
  
  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    });
  
    // FAIZ U ELI
    const theActualPicture = image.dataUrl;
  }
}
