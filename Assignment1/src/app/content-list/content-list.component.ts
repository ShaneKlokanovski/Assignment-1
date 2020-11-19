import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ContentService} from '../services/content.service';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
@Input() games: Content[];
searchResult: string;
searchGameTitle?: string;
gamesList: Content[];
  constructor(private contentService: ContentService) {
    this.searchResult = 'There has been no search performed at this moment';
  }

  ngOnInit(): void {
    this.contentService.getGamesObservable().subscribe(gl => {
      this.gamesList = gl;
    });
  }
  searchForTitle(title: string): void{
    const filterGameList = this.gamesList.filter(g => g.title === title);
    if (filterGameList.length > 0){
      this.searchGameTitle = title;
      this.searchResult = 'The game that you have searched for has been located';
      return;
    }
    this.searchGameTitle = '';
    this.searchResult = 'The game that you have searched for has not been located';
    return;
  }

  // tslint:disable-next-line:typedef
  addGameToList($event: any) {
  }
}

