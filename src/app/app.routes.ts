import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { AccueilComponentComponent } from './components/accueil-component/accueil-component.component';
import { SmartphoneListComponent } from './components/smartphone-list/smartphone-list.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path:'',pathMatch:'full', redirectTo:'/accueil-component'
    },
    {
        path: 'accueil-component',
        component: AccueilComponentComponent,
        children:[
            {path: 'List', component: SmartphoneListComponent},
            {path:'', redirectTo:'List', pathMatch:'full'}
        ]
    },
    {
        path: '**',
        redirectTo: '/accueil-component'
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
