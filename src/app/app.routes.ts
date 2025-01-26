import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { AccueilComponentComponent } from './components/accueil-component/accueil-component.component';
import { SmartphoneListComponent } from './components/smartphone-list/smartphone-list.component';
import { NgModule } from '@angular/core';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { CartComponentComponent } from './components/cart-component/cart-component.component';
import { DetailsComponent } from './components/details/details.component';
import { ContactComponent } from './components/contact/contact.component';

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
            {path:'', redirectTo:'List', pathMatch:'full'},
            {path: 'Cart', component: CartComponentComponent},
            {path:'', redirectTo:'Cart', pathMatch:'full'},
            {path: 'Login', component: LoginComponentComponent},
            {path:'', redirectTo:'Login', pathMatch:'full'},
            {path: 'details', component: DetailsComponent},
            {path:'', redirectTo:'details', pathMatch:'full'},
            {path: 'Contact', component: ContactComponent},
            {path:'', redirectTo:'Contact', pathMatch:'full'}
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
