import { PaymentType } from "./payment-types";
import { ProductCategory } from "./product-category";
import { ProductLang } from "./product-lang";
import { ProductTags } from "./product-tags";

export interface Product{
    _id?:string;
    data?:ProductLang[];
    price?:number;
    discount?:number;
    imagesUrls?:string[];
    paymentTypes?:PaymentType[];
    categoryId?:ProductCategory;
    tags?:ProductTags[];
}