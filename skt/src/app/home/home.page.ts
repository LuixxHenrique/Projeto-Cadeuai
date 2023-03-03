import { Component, OnInit} from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  // option = {
  //   slidesPerView: 1.7,
  //   centeredSlides: true,
  //   loop: true,
  // }
  // slides = [
  //   {
  //     titulo: 'Frios',
  //     image: '/assets/map/setor_images/frios.png',
  //     num: 1
  //   },
  //   {
  //     titulo: 'Limpeza',
  //     image: '/assets/map/setor_images/limpeza.png',
  //     num: 2
  //   },
  //   {
  //     titulo: 'Bebidas',
  //     image: '/assets/map/setor_images/bebidas.png',
  //     num: 2
  //   }
  // ];

  public image_path =  '' 
  
  constructor(
    private route : ActivatedRoute
  ) {}

  ngOnInit() {
    var id: any = String(this.route.snapshot.paramMap.get('id'))
    this.image_path = `assets/map-shopping/entry-${id}/inicio-${id}.png`
    //assets\map-shopping\entry-1\Inicio-1.png
  }

  routeSelect(loja: string){
    var id: any = String(this.route.snapshot.paramMap.get('id'))
    this.image_path = `assets/map-shopping/entry-${id}/entry${id}-${loja}.png`
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
