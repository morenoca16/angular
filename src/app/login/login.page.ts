import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  async presentLoginAlert() {
    const alert = await this.alertController.create({
      header: 'Iniciar sesión',
      backdropDismiss: false, // No se cerrará al hacer clic fuera de la ventana
      inputs: [
        {
          name: 'username',
          type: 'text',
          placeholder: 'Usuario',
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Contraseña',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Aceptar',
          handler: (data) => {
            if (data.username === 'pmorenoc' && data.password === '1234') {
              this.router.navigate(['/home']);
            } else {
              this.presentToast('Credenciales incorrectas. Por favor, intenta nuevamente.');
              this.presentLoginAlert();
            }
          },
        },
      ],
    });

    await alert.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }

  ionViewDidEnter() {
    this.presentLoginAlert();
  }
}



