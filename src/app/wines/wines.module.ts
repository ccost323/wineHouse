import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { WineDetailsComponent } from "./components/wine-details/wine-details.component";
import { WineItemComponent } from "./components/wine-item/wine-item.component";
import { WineListComponent } from "./components/wine-list/wine-list.component";
import { WineNewComponent } from "./components/wine-new/wine-new.component";

import { WinesRoutingModule } from "./wines-routing.module";

/* IMPORTACION DE COMPONENTES DE VINOS */

@NgModule({
  declarations: [
    WineItemComponent,
    WineListComponent,
    WineNewComponent,
    WineDetailsComponent,
  ],
  imports: [CommonModule, WinesRoutingModule, FormsModule, ReactiveFormsModule],
})
export class WinesModule {}