import { AuthGuardService } from './../../_services/auth-guard.service';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from 'src/app/features/product/products/item/item.component';
import { ProductsComponent } from 'src/app/features/product/products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { StringMaxLengthPipe } from 'src/app/pipes/string-max-length.pipe';



@NgModule({
  declarations: [
    ProductsComponent,
    ItemComponent,
    AddProductComponent,
    ProductDetailsComponent,
    StringMaxLengthPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
    {path:'',children:[
      {path:'',component:ProductsComponent},
      {path:'add',component:AddProductComponent,canActivate:[AuthGuardService]},
      {path:'details/:id',component:ProductDetailsComponent},
      {path:'edit/:id',component:AddProductComponent}
    ]},
    
    
    ]),
    FormsModule,
    
  ],
  exports:[],
  providers:[]
})
export class ProductModule { }
