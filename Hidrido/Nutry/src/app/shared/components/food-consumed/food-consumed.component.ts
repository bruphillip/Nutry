import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-food-consumed',
  templateUrl: './food-consumed.component.html',
  styleUrls: ['./food-consumed.component.css']
})
export class FoodConsumedComponent implements OnInit {
  qtd_food: number;
  constructor(
    public modalController: ModalController,
    public toastController: ToastController
  ) {}

  ngOnInit() {}

  onBack() {
    this.modalController.dismiss();
  }

  async onSave() {
    if (this.qtd_food) {
      this.modalController.dismiss({ qtd: 1 });
    } else {
      const toast = await this.toastController.create({
        message: 'Por favor informe a quantidade do aliimento',
        showCloseButton: true,
        closeButtonText: 'Ok',
        duration: 2000
      });

      toast.present();
    }
  }
}
