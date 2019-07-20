import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './modules/layout/layout.component';
import { MessageBoardComponent } from './components/message-board/message-board.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'messageboard',
    pathMatch: 'full',
  },

  {
    path: '',
    component: LayoutComponent ,
    data: {
      title: 'Home'
    },
    children: [ 
      {
        path: 'home',
        loadChildren: './modules/home/home.module#HomeModule'
      },  
      {
        path: 'feature', 
        loadChildren: './modules/feature/feature.module#FeatureModule'
      },
      {
        path: 'pricing',
        loadChildren: './modules/pricing/pricing.module#PricingModule'
      },  
      {
        path: 'about',
        loadChildren: './modules/about/about.module#AboutModule'
      },
      
      {
        path: 'messageboard',
        component: MessageBoardComponent ,
        data: {
          title: 'Message Board'
        }
      },

      {
        path: 'search',
        component: SearchComponent ,
        data: {
          title: 'Search'
        }
      },      
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
