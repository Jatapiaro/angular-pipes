import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'constrasenia'
})
export class ConstraseniaPipe implements PipeTransform {

  transform(value: string, activar: boolean ): any {
    let salida:string = "";
    if(activar){
        for(let i=0; i<value.length;i++){
            salida+="*";
        }
        return salida;
    }else{
        return value;
    }

  }

}
