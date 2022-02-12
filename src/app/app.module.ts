import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutesModule } from "./app-routes.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { WineAppInterceptor } from "./shared/services/wine-app.interceptor";
import { WineService } from "./wines/services/wine.service";
import { UserService } from "./user/services/user.service";
import { UserStoreService } from "./shared/services/user-store.service";
import { AuthGuard } from "./shared/guards/auth-guard";
import { WineNewDeactivateGuard } from "./shared/guards/wine-new-deactivate-guard";
import { WineLoadResolver } from "./wines/guards/wine-load-resolver";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutesModule,
  ],
  providers: [
    WineService,
    UserService,
    UserStoreService,
    AuthGuard,
    WineNewDeactivateGuard,
    WineLoadResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WineAppInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

