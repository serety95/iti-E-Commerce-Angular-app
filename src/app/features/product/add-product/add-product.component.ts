

import { ProductTags } from 'src/app/_model/product-tags';

import { ProductCategoryService } from 'src/app/_services/product-category.service';
import { ProductCategory } from 'src/app/_model/product-category';
import { PaymentTypeService } from 'src/app/_services/payment-type.service';
import { Component, OnInit } from '@angular/core';
import { PaymentType } from 'src/app/_model/payment-types';
import { Product } from 'src/app/_model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/_services/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
product:Product={data:[{}],paymentTypes:[ ],tags:[],categoryId:{}}
paymentTypes:PaymentType[]=[];
ProductCategory:ProductCategory[]=[];
editMode:boolean=false;

  constructor(
    private activatedRoute:ActivatedRoute,
    private PaymentTypeService:PaymentTypeService,
    private ProductCategoryService:ProductCategoryService,
    private productService:ProductService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.editMode=this.activatedRoute.snapshot.url[1] && this.activatedRoute.snapshot.url[1].path ==='edit' && true;
    if(this.editMode){
      const id=this.activatedRoute.snapshot.params.id;
      console.log(id);
      
      this.productService.getProductById(id).subscribe(
        (res)=>{console.log(res);
        
          this.product=res},
        (err)=>{console.log("err");
        },
        ()=>{}
      );
    }
    

    
    this.paymentTypes=this.PaymentTypeService.getAllPayments();
    this.ProductCategoryService.getAllCategories().subscribe(
      (res)=>{this.ProductCategory= res},
      (err)=>{console.log(err);
      },
      ()=>{}
    );
  }
  onSubmit(form){
    // for (let index = 0; index < this.paymentTypes.length; index++) {
    //   if (form.value['check_'+index]) {
    //     this.product.paymentTypes.push(this.paymentTypes[index]);
    //   }
    // }
    this.productService.addProduct(this.product).subscribe(
      (response)=>{console.log(response);
        this.router.navigate(['/product']);
      },
      (err)=>{console.log(err);
      },
      ()=>{}
    )
  }
onCheckBoxPressed(index){
  this.product.paymentTypes.push(this.paymentTypes[index]);
}
  onTagAdded(tagInput){
  let id=this.product.tags.length
  this.product.tags.push({name:tagInput.value,id:id});
  console.log(this.product.tags)
  console.log(id)
  tagInput.value='';
  }
  
    deleteTag(id:number){

     this.product.tags=this.product.tags.filter(p=>p.id!==id);
 
    //  this.product.tags.splice(index,1);

    }
}
