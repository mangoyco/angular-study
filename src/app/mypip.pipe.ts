import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypip'
})
export class MypipPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let len = value.length
    console.log(value, args)
    if (len > 3) {
      return '长'
    } else if (len == 3) {
      return '一样长'
    } else {
      return '短'
    }
    // return null;
  }

}
