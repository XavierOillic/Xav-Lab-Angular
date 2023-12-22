import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PenDrawingsComponent } from './components/pen-drawings/pen-drawings.component';
import { DigitalDrawingsComponent } from './components/digital-drawings/digital-drawings.component';
import { ColoursPortraitsComponent } from './components/colours-portraits/colours-portraits.component';
import { PenPortraitsComponent } from './components/pen-portraits/pen-portraits.component';

const routes: Routes = [
  {path: 'Pen-Drawings', component:PenDrawingsComponent},
  {path: 'Digital-Drawings', component:DigitalDrawingsComponent},
  {path: 'Colours-Portraits', component:ColoursPortraitsComponent},
  {path: 'Pen-Portraits', component:PenPortraitsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
