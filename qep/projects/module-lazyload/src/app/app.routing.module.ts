import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'mod1',
    loadChildren: './modules/mod1/mod1.module#Mod1Module'
  },

  {
    path: 'mod2',
    loadChildren: './modules/mod2/mod2.module#Mod2Module'
  },

  {
    path: 'mod3',
    loadChildren: './modules/mod3/mod3.module#Mod3Module'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
