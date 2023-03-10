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
  public image_path =  '' // armazena local do arquivo da imagem

  // opções para dar zoom a imagem no slide
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
  }

  routeSelect(loja: string){
    // coleta o id da pagina e monstra a imagem da rota até o setor
    this.modalController.dismiss()
    var id: any = String(this.route.snapshot.paramMap.get('id'))
    this.image_path = `assets/map-shopping/entry-${id}/entry${id}-${loja}.png`
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
