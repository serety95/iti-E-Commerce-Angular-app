import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
products:Product[];
// @Output() productAdded= new EventEmitter<Product>();
pageNumbers:number[]=[];
pageSize:number=9;
currentPage=0;
cloneProducts:Product[]=[];


// productService= new ProductService();
  constructor(private productService:ProductService) { 
//  this.products=this.productService.getAllProducts()
   
  }
 x;
  ngOnInit(): void {
  // this.products=this.productService.getAllProducts()
    
  this.productService.getAllProducts().subscribe(
    (response) => {
      this.products = response.product;
      this.cloneProducts=this.products;
      
      this.calcualteNumberOfPages(response['numberOfProducts']);
      
    },
    (error) => { console.log(error); },
    () => { }
  ); 
    
  }
  
    
  sort(productSort){
    switch (productSort.target.value){
      case "1":console.log("case 1");
      break;
      
      case "2":console.log("case 2");
      break;

      case "3":console.log("case 3");
      break;

      case "4":console.log("case 4");
      let newProducts = this.products;
        
        let mapped = newProducts.map(function(el, i) {
          return { index: i, value: el.data[0].name.toLowerCase() };
        })
        
        mapped.sort(function (a, b) {
          if (a.value > b.value) {
            return 1;
          }
          if (a.value < b.value) {
            return -1;
          }
          return 0;
        });
        this.products = mapped.map(function(el){
          return newProducts[el.index]
        })
        break;
      
      
    }
  }

  calcualteNumberOfPages(length){
   this.pageNumbers=[]
    for (let index = 0; index < length/this.pageSize; index++) {
      this.pageNumbers.push(index+1);
      
    }
  }
  // subscribeFunction(e:Product):void{
  //   // this.productAdded.emit(e);
  //   this.productService.productAdded.emit(e);
    
  // }
 getSlicedArrayOfProducts():Product[]{
  
   const start=this.currentPage*this.pageSize;
  return this.products.slice(start,start+this.pageSize);
 }
 onSearchHandler(searchInput:string){
  this.currentPage=0
  let prodName=(searchInput).toLowerCase();
 this.products= this.productService.searchByName(prodName,this.cloneProducts)
  this.calcualteNumberOfPages(this.products.length);
 }
}
