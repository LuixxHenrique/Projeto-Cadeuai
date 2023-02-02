import { Component, OnInit} from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  logo =[
    {
      image: "assets/icon/logo.png"
    }
  ]

  option = {
    slidesPerView: 1.7,
    centeredSlides: true,
    loop: true,
  }

  slides = [
    {
      titulo: 'Frios',
      image: 'assets/setor_images/frios.png'
    },
    {
      titulo: 'Limpeza',
      image: 'assets/setor_images/limpeza.png'
    },
    {
      titulo: 'Bebidas',
      image: 'assets/setor_images/bebidas.png'
    }
  ];

  public image_path =  '' 
  public image = String
  
  constructor() {}

  routeSelect(value:Number){
    if (value == 1){
      this.image_path = 'assets/map/map 1/entrada/setor1.png'
    }
    if (value == 2){
      this.image_path = 'assets/map/map 1/entrada/setor2.png'
    }
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    });
  
    // Here you get the image as result.
    const theActualPicture = image.dataUrl;
  }

}