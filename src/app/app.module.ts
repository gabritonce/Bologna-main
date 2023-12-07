import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Route, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProfileComponent } from "./components/profile/profile.component";
import { ImpostazioniComponent } from "./components/impostazioni/impostazioni.component";
import { PasswordComponent } from "./components/password/password.component";
import { ConsensiComponent } from "./components/consensi/consensi.component";
import { PrivacyComponent } from "./components/privacy/privacy.component";
import { AssistenzaComponent } from "./components/assistenza/assistenza.component";
import { DeleteDialogComponent } from "./components/delete-dialog/delete-dialog.component";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSidenavModule } from '@angular/material/sidenav';
import { DrawerComponent } from './components/drawer/drawer.component';
import { CentriComponent } from './components/centri/centri.component';
import { CentriGommeComponent } from './components/centri-gomme/centri-gomme.component';

const rotte: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "profile",
    component: ProfileComponent,
  },
  {
    path: "impostazioni",
    component: ImpostazioniComponent,
  },
  {
    path: "password",
    component: PasswordComponent,
  },
  {
    path: "consensi",
    component: ConsensiComponent,
  },
  {
    path: "centri",
    component: CentriComponent,
  },
  {
    path: "privacy",
    component: PrivacyComponent,
  },
  {
    path: "assistenza",
    component: AssistenzaComponent,
  },
  {
    path: "centri-gomme",
    component: CentriGommeComponent,
  },
  

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    ProfileComponent,
    PasswordComponent,
    ConsensiComponent,
    PrivacyComponent,
    AssistenzaComponent,
    DeleteDialogComponent, // Add DeleteDialogComponent here
    ImpostazioniComponent, DrawerComponent, CentriComponent, CentriGommeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotte),
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
