// ====== ./app/app.routes.ts ======

// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ResultsComponent } from './results.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'results', component: ResultsComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);