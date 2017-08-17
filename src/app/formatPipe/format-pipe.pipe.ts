import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPipe'
})
export class FormatPipePipe implements PipeTransform {

  transform(value: string): any {
    return value + " years of exp";
  }

}
