import { Injectable } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {Observable, of} from 'rxjs';
import {VIDEOGAMELIST} from '../helper-files/contentDB';
import {MessageService} from '../message.service';



@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService) { }
  getGames(): Content[] {
    return VIDEOGAMELIST;
  }
  getGamesObservable(): Observable<Content[]>{
    this.messageService.add('Content retrieved!');
    return of(VIDEOGAMELIST);
  }
}
