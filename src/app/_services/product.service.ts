import { ProductCategoryService } from 'src/app/_services/product-category.service';
import { Product } from 'src/app/_model/product';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[];
  //  =[
  //     { id:13123,
  //       data:[{name:'iphone 10',description:'asdasdasd'}],
  //       price: 10200,
  //       discount: 730,
  //       imagesUrls:['./assets/img/placeholder.png','./assets/img/placeholder.png'],
  //       paymentTypes:[{id:1},{id:5}],

  //       tags:[{id:1231,name:"string"},{id:1231,name:"string"}],
  //     },
  //     {
  //       id:1232,
  //       data:[{name:'camera3',description:'asdasdasd'}],
  //       price: 12000,
  //       discount: 1000,
  //       imagesUrls:['./assets/img/placeholder.png','./assets/img/placeholder.png'],
  //       paymentTypes:[{id:1},{id:5}],

  //       tags:[{id:1231,name:"string"},{id:1231,name:"string"}],
  //     },{id:1323,
  //       data:[{name:'camera1',description:'asdasdasd'}],

  //       price: 600,
  //       // discount: 330,
  //       imagesUrls:['./assets/img/placeholder2.jfif','./assets/img/placeholder2.jfif'],
  //     },{id:11423,
  //       data:[{name:'iphone12',description:'asdasdasd'}],
  //       price: 20600,
  //       // discount: 30,
  //       imagesUrls:['./assets/img/placeholder.png','./assets/img/placeholder.png'],
  //     },{id:1253,
  //       data:[{name:'camera',description:'asdasdasd'}],
  //       price: 201230,
  //       discount: 3120,
  //       imagesUrls:['./assets/img/placeholder2.jfif','./assets/img/placeholder2.jfif'],

  //     },{id:1263,
  //       data:[{name:'camera',description:'asdasdasd'}],

  //       price: 22300,
  //       // discount: 230,
  //       imagesUrls:['./assets/img/placeholder2.jfif','./assets/img/placeholder2.jfif'],
  //     },{id:1243,
  //       data:[{name:'camera',description:'asdasdasd'}],

  //       price: 200,
  //       discount: 30,
  //       imagesUrls:['./assets/img/3.jpg','./assets/img/3.jpg'],
  //     },{id:2123,
  //       data:[{name:'camera',description:'asdasdasd'}],

  //       price: 2200,
  //       discount: 340,
  //       imagesUrls:['./assets/img/placeholder.png','./assets/img/placeholder.png'],
  //     },{id:1253,
  //       data:[{name:'camera',description:'asdasdasd'}],

  //       price: 200,
  //       // discount: 30,
  //       imagesUrls:['./assets/img/3.jpg','./assets/img/3.jpg']

  //     },{id:1323,
  //       data:[{name:'camera',description:'asdasdasd'}],

  //       price: 200,
  //       // discount: 30,
  //       imagesUrls:['./assets/img/3.jpg','./assets/img/3.jpg'],
  //     },{id:1223,
  //       data:[{name:'camera',description:'asdasdasd'}],

  //       price: 200,
  //       // discount: 30,
  //       imagesUrls:['./assets/img/3.jpg','./assets/img/3.jpg'],
  //     },{id:14263,
  //       data:[{name:'camera',description:'asdasdasd'}],

  //       price: 200,
  //       // discount: 30,
  //       imagesUrls:['./assets/img/3.jpg','./assets/img/3.jpg'],
  //     },{id:1273,
  //       data:[{name:'camera',description:'asdasdasd'}],

  //       price: 200,
  //       // discount: 30,
  //       imagesUrls:['./assets/img/3.jpg','./assets/img/3.jpg'],
  //     },{id:4123,
  //       data:[{name:'camera',description:'asdasdasd'}],

  //       price: 200,
  //       // discount: 30,
  //       imagesUrls:['./assets/img/3.jpg','./assets/img/3.jpg'],
  //     },{id:8123,
  //       data:[{name:'camera',description:'asdasdasd'}],

  //       price: 200,
  //       // discount: 30,
  //       imagesUrls:['./assets/img/3.jpg','./assets/img/3.jpg'],
  //     },{ id:13123,
  //       data:[{name:'iphone 10',description:'asdasdasd'}],
  //       price: 10200,
  //       discount: 730,
  //       imagesUrls:['./assets/img/placeholder.png','./assets/img/placeholder.png'],
  //       paymentTypes:[],

  //       tags:[{id:1231,name:"string"},{id:1231,name:"string"}],
  //     },{ id:13123,
  //       data:[{name:'iphone 10',description:'asdasdasd'}],
  //       price: 10200,
  //       discount: 730,
  //       imagesUrls:['./assets/img/placeholder.png','./assets/img/placeholder.png'],
  //       paymentTypes:[],

  //       tags:[{id:1231,name:"string"},{id:1231,name:"string"}],
  //     },{ id:13123,
  //       data:[{name:'iphone 10',description:'asdasdasd'}],
  //       price: 10200,
  //       discount: 730,
  //       imagesUrls:['./assets/img/placeholder.png','./assets/img/placeholder.png'],
  //       paymentTypes:[],

  //       tags:[{id:1231,name:"string"},{id:1231,name:"string"}],
  //     },{ id:13123,
  //       data:[{name:'iphone 10',description:'asdasdasd'}],
  //       price: 10200,
  //       discount: 730,
  //       imagesUrls:['./assets/img/placeholder.png','./assets/img/placeholder.png'],
  //       paymentTypes:[],

  //       tags:[{id:1231,name:"string"},{id:1231,name:"string"}],
  //     },{ id:13123,
  //       data:[{name:'iphone 10',description:'asdasdasd'}],
  //       price: 10200,
  //       discount: 730,
  //       imagesUrls:['./assets/img/placeholder.png','./assets/img/placeholder.png'],
  //       paymentTypes:[],

  //       tags:[{id:1231,name:"string"},{id:1231,name:"string"}],
  //     },

  // ]
  productAdded = new EventEmitter<Product>();

  baseUrl = 'https://mearn-stack-backend-test.herokuapp.com/';
  constructor(private httpClient: HttpClient) {
    // this.httpClient.get(`${this.baseUrl}product`).subscribe(
    //   (res)=>{this.products=res as Product[]},
    //   (err)=>{console.log(err)},
    //   ()=>{}
    // )
  }

  getAllProducts(): any {
    return this.httpClient.get(`${this.baseUrl}product`);
    // return this.products.slice();
  }
  getProductById(id: string): any {
    return this.httpClient.get(`${this.baseUrl}product/${id}`);
  }
  addProduct(product: Product) {
    // const id=this.products.length;
    // const{data,price,discount,imagesUrls,paymentTypes,categoryId,tags}=product;

    // const newProduct:Product={id,data,price,discount,imagesUrls,paymentTypes,categoryId,tags};
    // this.products.push(newProduct);
    let body = {
      data: product.data,
      price: product.price,
      discount: product.discount,
      imagesUrls: product.imagesUrls,
      paymentTypes: product.paymentTypes,
      categoryId: product.categoryId,
      tags: product.tags,
    };
    /////token/////////////////
    // const token=localStorage.getItem('token')
    // console.log(token);
    // const headers=new HttpHeaders({
    //   authorization:token
    // })

    return this.httpClient.post(`${this.baseUrl}product/add`, body);
  }
  
  updateProduct(product: Product) {
    const index = this.products.findIndex((p) => p._id === product._id);
    this.products[index] = {
      _id: product._id,
      data: product.data,
      price: product.price,
      discount: product.discount,
      imagesUrls: product.imagesUrls,
      paymentTypes: product.paymentTypes,
      categoryId: product.categoryId,
      tags: product.tags,
    };
  }
  deleteProduct(id: string) {
    const index = this.products.findIndex((p) => p._id === id);
    this.products.splice(index, 1);
  }
  searchByName(productName: string, products: Product[]) {
    return products.filter((p) =>
      p.data[0].name.toLowerCase().includes(productName)
    );
  }
}
