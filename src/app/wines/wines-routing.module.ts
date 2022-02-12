import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../shared/guards/auth-guard";
import { NgModule } from "@angular/core";

import { WineDetailsComponent } from "./components/wine-details/wine-details.component";
import { WineListComponent } from "./components/wine-list/wine-list.component";
import { WineLoadResolver } from "./guards/wine-load-resolver";
import { WineNewComponent } from "./components/wine-new/wine-new.component";
import { WineNewDeactivateGuard } from "../shared/guards/wine-new-deactivate-guard";

const routes: Routes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  {
    path: "list",
    component: WineListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "new",
    component: WineNewComponent,
    canActivate: [AuthGuard],
    canDeactivate: [WineNewDeactivateGuard],
  },
  {
    path: ":id",
    component: WineDetailsComponent,
    canActivate: [AuthGuard],
    resolve: { wine: WineLoadResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WinesRoutingModule {}
