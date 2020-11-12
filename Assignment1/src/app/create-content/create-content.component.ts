import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() addNewGame = new EventEmitter<Content>();
  newGameAdded: Content;
  // private addTest: boolean;
  @Input() game: [Content];

  constructor() {
    this.newGameAdded = {
      id: 0,
      author: '',
      imgUrl: '',
      type: '',
      title: '',
      body: '',
      tags: []
    };
  }


  ngOnInit(): void {
    this.addNewGame.emit(this.newGameAdded);
  }

  addedGame(): void{
    const addPromise = new Promise((success, fail) => {
      if (this.newGameAdded.author.length && this.newGameAdded.title.length && this.newGameAdded.body.length) {
        success(console.log('Addition Is Successful', this.newGameAdded.title));
      }
      else{
        fail('Addition Has Failed');
      }
    });
    addPromise.then(successResult =>
      successResult)
      .catch(failResult => console.log(failResult));
    this.newGameAdded.id = +this.newGameAdded.id;
    this.newGameAdded.author = '';
    this.newGameAdded.title = '';
    this.newGameAdded.body = '';
  }

}
