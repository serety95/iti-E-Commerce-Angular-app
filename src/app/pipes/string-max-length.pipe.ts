import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringMaxLength'
})
export class StringMaxLengthPipe implements PipeTransform {

 
  transform(value: string ,length: number): string {
    

    if(value.length>length){
      
      return value.slice(0,length)+'...Read more';
    }
    
      
    }
  }
  




