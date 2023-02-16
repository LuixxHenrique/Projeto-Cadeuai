import { Component, OnInit} from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { SwiperModule } from 'swiper/types/shared';
import { Swiper, SwiperOptions }  from 'swiper';


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

    const theActualPicture = image.dataUrl;
  }
}
