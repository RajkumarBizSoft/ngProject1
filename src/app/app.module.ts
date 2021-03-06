import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./navbar/navbar.component";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatInputModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatNativeDateModule
} from "@angular/material";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AppRoutingModule } from ".//app-routing.module";

import { PropertyComponent } from "./components/property/property.component";
import { ApplibService } from "./services/applib.service";
import { PropertyService } from "./services/property.service";
import { RoomDetailsComponent } from "./components/room-details/room-details.component";
import { HallDetailsComponent } from "./components/hall-details/hall-details.component";
import { HolidayComponent } from "./components/holiday/holiday.component";
import { MemberListComponent } from "./components/member-list/member-list.component";
import { HolidayService } from "./services/holiday.service";
import { FormsModule } from "@angular/forms";

import { BsDatepickerModule } from "ngx-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    PropertyComponent,
    RoomDetailsComponent,
    HallDetailsComponent,
    HolidayComponent,
    MemberListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    BrowserAnimationsModule,
    LayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AppRoutingModule,
    MatInputModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatToolbarModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [ApplibService, PropertyService, HolidayService],
  bootstrap: [AppComponent]
})
export class AppModule {}
