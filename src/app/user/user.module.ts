import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

import { UserRoutingModule } from "./user-routing.module";


@NgModule({
  imports: [CommonModule, FormsModule, UserRoutingModule, ReactiveFormsModule],
  declarations: [LoginComponent, RegisterComponent],
})
export class UserModule {}
