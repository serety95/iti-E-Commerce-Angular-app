import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/_services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
product:Product={data:[{name:''}],tags:[],imagesUrls:[],paymentTypes:[]};
relatedProducts:Product[];
  constructor(private ProductService:ProductService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id;
    // this.relatedProducts=this.ProductService.getAllProducts().slice(3,7);
    this.activatedRoute.params.subscribe(
      (params)=>{
        id=params.id;
        this.ProductService.getProductById(id).subscribe(
          (res)=>{this.product=res
            this.ProductService.getAllProducts().subscribe(
              (res)=>{this.relatedProducts=res.product.slice(3,7)},
              (err)=>{console.log(err);
              },
              ()=>{}
            );
          
          },
          (err)=>{console.log(err);
          },
          ()=>{}
        );
        
      },
      (error)=>{console.log(error);
      },
      ()=>{}

    );
    // const id=parseInt(this.activatedRoute.snapshot.params.id,10) ;
  
   
    
  }

}
