import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AttendanceComponent } from "./attendance/attendance.component";
import { QrCreatorComponent } from "./qr-creator/qr-creator.component";
import { ManualEntryComponent } from "./manual-entry/manual-entry.component";
import { ContactInfoComponent } from "./contact-info/contact-info.component";
import { ManualQrComponent } from "./manual-qr/manual-qr.component";
import { ChartsComponent } from "./charts/charts.component";
const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "createqr", component: QrCreatorComponent },
  { path: "attendance", component: AttendanceComponent },
  { path: "manual", component: ManualEntryComponent },
  { path: "contact-info", component: ContactInfoComponent },
  { path: "manual-qr", component: ManualQrComponent },
  { path: "chart", component: ChartsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingModules = [
  LoginComponent,
  HomeComponent,
  AttendanceComponent,
  QrCreatorComponent,
  ChartsComponent
];
