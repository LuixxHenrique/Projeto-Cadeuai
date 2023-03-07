// npm install ionic-img-viewer --save
// https://www.npmjs.com/package/ionic-img-viewer

import { Camera, CameraResultType } from '@capacitor/camera';
import { ActivatedRoute } from '@angular/router';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Gesture, GestureDetail } from '@ionic/core';
import { GestureController } from '@ionic/angular';
// import { ImageViewerController } from 'ionic-img-viewer';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  @ViewChild('img', { static: true }) img: any;
  currentScale = 1;
  public image_path =  '' // armazena a imagem inicia
  
  constructor(
    // constructor(private imageViewerCtrl: ImageViewerController) { }

    private gestureCtrl: GestureController,
    public gesture: Gesture,
    private route : ActivatedRoute 
  ) {}

  ngOnInit() {
    // coleta o id da pagina e monstra a imagem inicial
    var id: any = String(this.route.snapshot.paramMap.get('id'))
    this.image_path = `assets/map-shopping/entry-${id}/entry${id}-inicio-${id}.png`
    
  }

  routeSelect(loja: string){
    // coleta o id da pagina e monstra a imagem da rota até o setor
    var id: any = String(this.route.snapshot.paramMap.get('id'))
    this.image_path = `assets/map-shopping/entry-${id}/entry${id}-${loja}.png`
  }
  
  ionViewWillEnter() {
    this.gesture = new Gesture(document.querySelector('ion-gesture'));
    this.gesture.enable(true);
  }

  // showImage() {
  //   const image = document.querySelector('ion-img');
  //   const imageViewer = this.imageViewerCtrl.create(image);
  //   imageViewer.present();
  // }


  zoom(ev: GestureDetail) {
    this.currentScale = this.currentScale * (1 + ev.scale / 100);
    this.img.nativeElement.style.transform = `scale(${this.currentScale})`;
  }

  async takePicture() {
    // monstra a camera na tela
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    });
  
    // Here you get the image as result.
    const theActualPicture = image.dataUrl;
  }

}
