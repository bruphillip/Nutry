import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalFoodConsumedComponent } from './../shared/components/modal-food-consumed/modal-food-consumed.component';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {
    constructor(public modalController: ModalController) {}

    async presentModal() {
        const modal = await this.modalController.create({
          component: ModalFoodConsumedComponent,
          componentProps: { value: 123 }
        });
        return await modal.present();
      }
}
