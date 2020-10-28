import {Component, OnInit} from '@angular/core';
import {Content} from '../helper-files/content-interface';



@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
games: Content[];
searchResult: string;
searchGameTitle?: string;
  constructor() {
    this.games = [{
      id: 0,
      author: 'EA',
      imgUrl: 'https://store-images.s-microsoft.com/image/apps.17271.14474759442990181.2963530c-5009-4260-976b-b5f35b0963d5.f8d6441a-f491-4244-8b56-148b847cf65a?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF',
      type: 'FPS',
      title: 'Battlefield 5',
      body: 'The best fps game of all time'
    }, {
      id: 1,
      author: 'EA',
      imgUrl: 'https://www.denofgeek.com/wp-content/uploads/2019/09/need-for-speed-heat-e1565757724962.jpg?resize=768%2C432',
      type: 'RACING',
      title: 'Need for Speed Heat',
      body: 'The best racing game of all time'
    }, {
      id: 2,
      author: 'EA',
      imgUrl: 'https://i.guim.co.uk/img/media/89917c8adfa23df147cf5e8bfa323b58b567634f/57_0_1143_686/master/1143.jpg?width=1200&quality=85&auto=format&fit=max&s=a24a74f1a8054131021a91f5f619faf9',
      type: 'RPG',
      title: 'ANTHEM',
      body: 'The best RPG FPS game of all time'
    }, {
      id: 3,
      author: 'EA',
      imgUrl: 'https://cdn-ext.fanatical.com/production/product/original/69622aee-d724-4214-8bb4-e62508290a61.jpeg?w=1200',
      type: 'FPS',
      title: 'STAR WARS BATTLEFRONT 2',
      body: 'The best FUTURISTIC FPS game of all time'
    }, {
      id: 4,
      author: 'NINTENDO',
      imgUrl: 'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_PokemonLetsGoPikachu_enGB.jpg',
      type: 'RPG',
      title: 'pokemon lets go pikachu',
      body: 'The best RPG game of all time'
    }];
    this.searchResult = 'There has been no search performed at this moment';
  }

  ngOnInit(): void {
  }
  searchForTitle(title: string): void{
    const filterGameList = this.games.filter(g => g.title === title);
    if (filterGameList.length > 0){
      this.searchGameTitle = title;
      this.searchResult = 'The game that you have searched for has been located';
      return;
    }
    this.searchGameTitle = '';
    this.searchResult = 'The game that you have searched for has not been located';
    return;
  }
}
