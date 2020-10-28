import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './helper-files/content-interface';

@Pipe({
  name: 'gameTypeFilter'
})
export class GameTypeFilterPipe implements PipeTransform {

  transform(myGamesList: Content[], chosenGameType: string): Content[] {
    return myGamesList.filter(game => game.type && game.type === chosenGameType);
  }

}
