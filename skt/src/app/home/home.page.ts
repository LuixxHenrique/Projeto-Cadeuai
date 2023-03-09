import { Camera, CameraResultType } from '@capacitor/camera';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public image_path =  '' // armazena a imagem inicia
  sliderOpt = {
    zoom: {
      maxRatio: 3.5,
    },
  }
  
  constructor(
    private route : ActivatedRoute,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    // coleta o id da pagina e monstra a imagem inicial
    var id: any = String(this.route.snapshot.paramMap.get('id'))
    this.image_path = `assets/map-shopping/entry-${id}/entry${id}-inicio-${id}.png`

    // this.map_css(0.8)
  }

  routeSelect(loja: string){
    // coleta o id da pagina e monstra a imagem da rota até o setor
    this.modalController.dismiss()
    var id: any = String(this.route.snapshot.paramMap.get('id'))
    this.image_path = `assets/map-shopping/entry-${id}/entry${id}-${loja}.png`
  }
  // map_css(scale: number){
  //   var imgMap = document.getElementById('img_map')
  //   if (imgMap) {
  //     const scaleString = `scale(${scale})`
  //     // const rotate = "rotate(-90deg)"
  //     imgMap.style.transform = `${scaleString} ` 
  //     // ${rotate}
  //     // imgMap.style.marginTop = "7rem"
  //   }
  // }
  

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
