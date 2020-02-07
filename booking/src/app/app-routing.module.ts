import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { OffersComponent } from './offers/offers.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HighestpricesComponent} from './highestprices/highestprices.component';
import { LowestpricesComponent} from './lowestprices/lowestprices.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { RoomAlfaComponent } from './accomodation/room-alfa/room-alfa.component';
import { RoomBravoComponent } from './accomodation/room-bravo/room-bravo.component';
import { RoomCharlieComponent } from './accomodation/room-charlie/room-charlie.component';
import { RoomDeltaComponent } from './accomodation/room-delta/room-delta.component';
import { RoomEchoComponent } from './accomodation/room-echo/room-echo.component';
import { RoomFoxtrotComponent } from './accomodation/room-foxtrot/room-foxtrot.component';
import { RoomGolfComponent } from './accomodation/room-golf/room-golf.component';
import { RoomOmegaComponent } from './accomodation/room-omega/room-omega.component';

const routes: Routes = [
  {path: 'accomodation', component: AccomodationComponent},
  {path: 'highestprices', component: HighestpricesComponent},
  {path: 'lowestprices', component: LowestpricesComponent},
  {path: 'accomodation/rooms', component: RoomsComponent},
  {path: 'accomodation/room-alfa', component: RoomAlfaComponent},
  {path: 'accomodation/room-bravo', component: RoomBravoComponent},
  {path: 'accomodation/room-charlie', component: RoomCharlieComponent},
  {path: 'accomodation/room-delta', component: RoomDeltaComponent},
  {path: 'accomodation/room-echo', component: RoomEchoComponent},
  {path: 'accomodation/room-foxtrot', component: RoomFoxtrotComponent},
  {path: 'accomodation/room-golf', component: RoomGolfComponent},
  {path: 'accomodation/room-omega', component: RoomOmegaComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
