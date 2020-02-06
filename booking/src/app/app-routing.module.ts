import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { OffersComponent } from './offers/offers.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HighestpricesComponent} from './highestprices/highestprices.component';
import { LowestpricesComponent} from './lowestprices/lowestprices.component';

const routes: Routes = [
  {path: 'accomodation', component: AccomodationComponent},
  {path: 'highestprices', component: HighestpricesComponent},
  {path: 'lowestprices', component: LowestpricesComponent},
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
