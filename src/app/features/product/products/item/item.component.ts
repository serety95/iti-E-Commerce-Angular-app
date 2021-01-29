import { ProductService } from 'src/app/_services/product.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_model/product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
  
})
export class ItemComponent implements OnInit {
@Input() product: Product;
// @Output() itemAdded= new EventEmitter<Product>();
// ProductService:ProductService;
  constructor(private ProductService:ProductService) {
    
    // this.product = {
    //   name: 'camera',
    //   price: 200,
    //   discount: 30,
    //   imgUrl: './assets/img/placeholder.png'
    // };
  }
  ngOnInit(): void {}
  getPrice():number{
    return this.product.discount ? this.product.price-this.product.discount:this.product.price
  }
  addedToCart():void{
    // this.itemAdded.emit(this.product);
    this.ProductService.productAdded.emit(this.product);
  }
}
