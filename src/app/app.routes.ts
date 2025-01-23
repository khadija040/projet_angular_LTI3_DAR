import { Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { AccueilComponentComponent } from './components/accueil-component/accueil-component.component';

export const routes: Routes = [
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'home',
        component: AccueilComponentComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
