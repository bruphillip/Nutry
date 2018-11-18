import { Component, OnInit } from '@angular/core';
import {
    ModalController,
    NavController,
    ToastController
} from '@ionic/angular';
import { FoodConsumedComponent } from '../food-consumed/food-consumed.component';

@Component({
    selector: 'app-modal-food-consumed',
    templateUrl: './modal-food-consumed.component.html',
    styleUrls: ['./modal-food-consumed.component.css']
})
export class ModalFoodConsumedComponent implements OnInit {
    modal: any;
    constructor(
        public modalController: ModalController,
        private nav: NavController,
        public toastController: ToastController
    ) { }

    ngOnInit() { }

    onBack() {
        this.modalController.dismiss();
    }

    async onSelected() {
        this.modal = await this.modalController.create({
            component: FoodConsumedComponent,
            componentProps: { value: 123 }
        });

        this.modal.onDidDismiss().then(async res => {
            if (res.data) {
                const toast = await this.toastController.create({
                    message: 'Alimento adicionado com sucesso',
                    showCloseButton: true,
                    closeButtonText: 'Ok',
                    duration: 2000
                });
                this.modalController.dismiss();
            }
        });

        return await this.modal.present();
    }
}
