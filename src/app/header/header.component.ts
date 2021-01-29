
import { ProductService } from 'src/app/_services/product.service';
import { Product } from 'src/app/_model/product';
import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnChanges {
  // @Input() cartArray:Product[];
cartArray:Product[]=[];
//  productService=new ProductService()
  constructor(private ProductService:ProductService) { }

  ngOnInit(): void {
this.ProductService.productAdded.subscribe(
  (res)=>{this.cartArray.push(res)},
  (err)=>{console.error(err)},
  (completed)=>{alert('this is completed')}
)
  }
ngOnChanges(changes):void{
    console.log(this.cartArray);
      }
  calculateTotalAmount():number{
    let total:number=0;
    for (let index = 0; index <this.cartArray.length; index++) {
      const Product = this.cartArray[index];
      total+=Product.discount?Product.price-Product.discount:Product.price;
      
    }return total;

  }

  removeFromCart(id:string){

   this.cartArray=this.cartArray.filter(p=>p._id!==id);

   //  this.product.tags.splice(index,1);

   }
}
