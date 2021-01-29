import { ProductModule } from './features/product/product.module';

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';

import { RegisterComponent } from './auth/register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'product',loadChildren:'./features/product/product.module#ProductModule'},
  {path:'login',component:LoginComponent},

  {path:'signup',component:RegisterComponent},
  {path:'about',component:AboutComponent},
  {path:'contactus',component:ContactComponent},

  {path:'**',component:NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules,scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
