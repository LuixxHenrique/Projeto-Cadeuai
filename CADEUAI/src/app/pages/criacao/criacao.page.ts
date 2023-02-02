import { Component, OnInit} from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory, Encoding} from '@capacitor/filesystem';
import { LoadingController, NavController, Platform } from '@ionic/angular';


const IMAGE_DIR = 'stored-images';

interface LocalFile { 
  name: string; 
  path: string;
  data: string;
}

@Component({
  selector: 'app-criacao',
  templateUrl: './criacao.page.html',
  styleUrls: ['./criacao.page.scss'],
})
export class CriacaoPage implements OnInit{
  images: LocalFile[] = [];

  constructor(private platform: Platform, private loadingCtrl: LoadingController, public navCtrl: NavController) { }


  async ngOnInit() { 
    this.loadFiles();
  }
  
  async loadFiles() { 
    this.images = [];
    
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
    });
    await loading.present();

    Filesystem.readdir({
      directory: Directory.Data,
      path: IMAGE_DIR
    }).then(result => { 

    }, async err => { 
      await Filesystem.mkdir({
        directory: Directory.Data,
        path: IMAGE_DIR
      });
    }).then(_ => { 
      loading.dismiss();
    })
  }
  
  async loadFileData(fileNames: string[]) { 
    for (let f of fileNames){ 
      const filePath = `${IMAGE_DIR}/${f}`;
      const readFile = await Filesystem.readFile({
        directory: Directory.Data,
        path: filePath
      });
      console.log('read: ', readFile)

    }
  }

  async selectImg() {
    const image = await Camera.getPhoto({
      quality: 80,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos
    });
    console.log(image);

    if (image) {
      this, this.saveImg(image);
    }
  }
  async saveImg(photo: Photo) {
    const base64Data = await this.readAsBase64(photo);
    console.log('SUS:', base64Data)



    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      directory: Directory.Data,
      path: `${IMAGE_DIR}/${fileName}`,
      data: base64Data
    });
    console.log('saved: ', savedFile)
    this.loadFiles();
  }
  // ajudantezinho
  async readAsBase64(photo: Photo) {
    if (this.platform.is('hybrid')) {
      const file = await Filesystem.readFile({
        path: photo.path
      });
      return file.data;
    }
    else {
      const response = await fetch(photo.webPath);
      const blob = await response.blob();
      return await this.convertBlobToBase64(blob) as string;
    }
  }

  // ajudante 2
  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const read = new FileReader;
    read.onerror = reject;
    read.onload = () => {
      resolve(read.result);
    };
    read.readAsDataURL(blob);
  });
  
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