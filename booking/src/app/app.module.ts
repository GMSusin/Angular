import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LowestpricesComponent } from './lowestprices/lowestprices.component';
import { HighestpricesComponent } from './highestprices/highestprices.component';
import { RoomAlfaComponent } from './accomodation/room-alfa/room-alfa.component';
import { RoomBravoComponent } from './accomodation/room-bravo/room-bravo.component';
import { RoomCharlieComponent } from './accomodation/room-charlie/room-charlie.component';
import { RoomDeltaComponent } from './accomodation/room-delta/room-delta.component';
import { RoomEchoComponent } from './accomodation/room-echo/room-echo.component';
import { RoomFoxtrotComponent } from './accomodation/room-foxtrot/room-foxtrot.component';
import { RoomGolfComponent } from './accomodation/room-golf/room-golf.component';
import { RoomOmegaComponent } from './accomodation/room-omega/room-omega.component';

@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    RoomsComponent,
    OffersComponent,
    AuthComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent,
    LowestpricesComponent,
    HighestpricesComponent,
    RoomAlfaComponent,
    RoomBravoComponent,
    RoomCharlieComponent,
    RoomDeltaComponent,
    RoomEchoComponent,
    RoomFoxtrotComponent,
    RoomGolfComponent,
    RoomOmegaComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
