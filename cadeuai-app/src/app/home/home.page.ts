import { Component} from '@angular/core';
import { Camera, CameraResultType} from '@capacitor/camera';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
      image: '/assets/map/setor_images/frios.png',
      num: 1
    },
    {
      titulo: 'Limpeza',
      image: '/assets/map/setor_images/limpeza.png',
      num: 2
    },
    {
      titulo: 'Bebidas',
      image: '/assets/map/setor_images/bebidas.png',
      num: 2
    }
  ];

  public image_path =  '' 
  
  constructor(private qrScanner: QRScanner ) {}

  routeSelect(value:Number){
    this.image_path = `assets/map/map 1/entrada/setor${value}.png`
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    });

    const isScanAvailable = await this.qrScanner.prepare();
    if (isScanAvailable) {
      const scanSub = this.qrScanner.scan().subscribe((text: string) => {
        console.log('Scanned QR code: ', text);
        scanSub.unsubscribe();
      });
    }

}
}
