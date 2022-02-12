import { Component, Input} from '@angular/core';
import { WineService } from 'src/app/wines/services/wine.service';
import { Wine } from '../../models/wine';
import { WineQuantityChange } from "../../models/wineQuantityChange";

@Component({
  selector: 'app-wine-item',
  templateUrl: './wine-item.component.html',
  styleUrls: ['./wine-item.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class WineItemComponent {

  @Input() public wine : Wine;
  wineQuantityChange: WineQuantityChange

  quantityArr : number[] = [...Array(21).keys()] // [0,1,2,3...2O]
  

  constructor(private wineService: WineService) {}


  incrementInCart() {

    this.wineQuantityChange = {
      wine: {...this.wine},
      changeInQuantity: 1,
      
    }
    this.onQuantityChange()
  }

  decrementInCart() {
    this.wineQuantityChange = {
      wine: {...this.wine},
      changeInQuantity: -1,
   
    }
    this.onQuantityChange() 
  }

  selectInCart(target:any) {

    const quantity : number = parseInt(target.value);
    this.wineQuantityChange = {
      wine: {...this.wine},
      quantitySelected: quantity,
      
    }

    this.onQuantitySelect()
  }

  onQuantitySelect() {

    this.wineService.selectQuantity(this.wineQuantityChange.wine.id, this.wineQuantityChange.quantitySelected)
    .subscribe((result) => {
       
     this.wine.quantityInCart = this.wineQuantityChange.quantitySelected
   })
 }

  onQuantityChange() {

    this.wineService.changeQuantity(this.wineQuantityChange.wine.id, this.wineQuantityChange.changeInQuantity)
     .subscribe((result) => {
      
      this.wine.quantityInCart += this.wineQuantityChange.changeInQuantity
    })
  }


  }


