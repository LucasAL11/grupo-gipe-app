import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('home').then(m => m.HomeComponent)
    },
    {
        path: 'users',
        loadComponent: () => import('users').then(m => m.UsersComponent),
        children: [
            {
                path: ":id",
                loadComponent: () => import('users').then((c) => c.UserDetailComponent)
            }
        ]
    },
    {
        path: 'security',
        loadComponent: () => import('security').then(m => m.SecurityComponent)
    },

];