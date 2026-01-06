import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './moduls/components/contact/contact.component';

export const routes: Routes = [
    {path: '' , component: HomeComponent},
    {path: '**', redirectTo: '' }
];
