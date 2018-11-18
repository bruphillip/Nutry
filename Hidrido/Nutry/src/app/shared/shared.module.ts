import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { IonicModule } from '@ionic/angular';
import { ItemsConsumedComponent } from './components/items-consumed/items-consumed.component';
import { ModalFoodConsumedComponent } from './components/modal-food-consumed/modal-food-consumed.component';
import { FoodConsumedComponent } from './components/food-consumed/food-consumed.component';
import { FormsModule } from '@angular/forms';

const COMPONENTS_EXPORTS = [
  ProgressBarComponent,
  ModalFoodConsumedComponent,
  ItemsConsumedComponent,
  FoodConsumedComponent
];

@NgModule({
  imports: [CommonModule, IonicModule, FormsModule],
  declarations: [...COMPONENTS_EXPORTS],
  exports: [...COMPONENTS_EXPORTS],
  entryComponents: [ModalFoodConsumedComponent, FoodConsumedComponent]
})
export class SharedModule {}
