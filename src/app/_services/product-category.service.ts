import { ProductCategory } from 'src/app/_model/product-category';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
ProductCategory:ProductCategory[]
// =[
//   {
//     name: 'ArtsCrafts',
//     id: '5eac38b30cfca15d7c804090',
//   },
//   {
//     name: 'Automotive',
//     id: '5eac39170cfca15d7c804091',
//   },
//   {
//     name: 'Baby',
//     id: '5eac39270cfca15d7c804092',
//   },
//   {
//     name: 'Books',
//     id: '5eacc09bba43cd4b889f3d12',
//   },
//   {
//     name: 'Eletronics',
//     id: '5eacc0a4ba43cd4b889f3d13',
//   },
//   {
//     name: "Women's Fashion",
//     id: '5eacc0b6ba43cd4b889f3d14',
//   },
//   {
//     name: "Men's Fashion",
//     id: '5eacc0bfba43cd4b889f3d15',
//   },
//   {
//     name: 'Health',
//     id: '5eacc0c8ba43cd4b889f3d16',
//   },
//   {
//     name: 'Home',
//     id: '5eacc0cdba43cd4b889f3d17',
//   },
//   {
//     name: 'Military Accessories',
//     id: '5eacc0d3ba43cd4b889f3d18',
//   },
//   {
//     name: 'Movies',
//     id: '5eacc0d9ba43cd4b889f3d19',
//   },
//   {
//     name: 'Sports',
//     id: '5eacc0deba43cd4b889f3d1a',
//   },
//   {
//     name: 'Tools',
//     id: '5eacc0e3ba43cd4b889f3d1b',
//   },
//   {
//     name: 'Toys',
//     id: '5eacc0e8ba43cd4b889f3d1c',
//   },
//   {
//     name: 'Automotive',
//     id: '5eacc0efba43cd4b889f3d1d',
//   }
// ]
baseUrl="https://mearn-stack-backend-test.herokuapp.com/";
  constructor(private httpClient:HttpClient ) {
// this.httpClient.get(`${this.baseUrl}product`).subscribe(

//   (res)=>{this.products=res as Product[]},
//   (err)=>{console.log(err)},
//   ()=>{}
// )

  }
getAllCategories():any{
  return this.httpClient.get(`${this.baseUrl}category`);
}
 
}
