import { Component } from '@angular/core';
import { Wine } from "src/app/wines/models/wine";
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { wineNameValidator } from 'src/app/wines/validators/wine-name.validator';
import { WineService } from 'src/app/wines/services/wine.service';

@Component({
  selector: 'app-wine-new',
  templateUrl: './wine-new.component.html',
  styleUrls: ['./wine-new.component.css']
})
export class WineNewComponent {
  public message = "";
  public wineForm : FormGroup;
  
  constructor(private fb: FormBuilder, private wineService: WineService) { 
    this.createForm();
  }

  createForm() {

    const pattern = "((?:https?\:\/\/|www\.)(?:[-a-z0-9]+\.)*[-a-z0-9]+.*)"

    this.wineForm = this.fb.group({
      name: ["", [Validators.required, wineNameValidator()]],
      price: ["", [Validators.required, Validators.min(1)]],
      imageUrl: ["",[Validators.required,Validators.pattern(pattern)]],
      isOnSale: false
    });
  }

  initializeWine(wine: Wine){
    wine = {
      name: '',
      id: 0,
      imageUrl: '',
      price: 0,
      isOnSale: false,
      quantityInCart: 0,
      foodPairing: []
    }
  }

  createWine() {
    if (this.wineForm.invalid) {
      this.message = "Please correct all errors and resubmit the form";
    } else {
      const wine: Wine = this.wineForm.value;
      this.wineService.create(wine)
      .subscribe((result:any) => {
        this.message = result.msg;
        this.wineForm.reset();
        this.initializeWine(wine);
        
      }, (err) => {
        this.message = err.msg;
      })   
    }
    }
  }


