import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './moduls/components/contact/contact.component';
import { LealnoticeComponent } from './pages/legalnotice/lealnotice.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'legal', component: LealnoticeComponent },
    { path: '**', redirectTo: '' }
];
