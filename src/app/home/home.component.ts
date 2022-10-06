import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as uniqid from 'uniqid';
// import * as Sortable from 'sortablejs';
// // import { SortableEvent } from 'sortablejs';
import * as uuid from 'uuid';

const myId = uuid.v4();
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  // sortable: any | Sortable;
  pawn = uniqid();
  elephant: any;
  cPieces: any = [
    ['elephant', 'horse', 'camel1', 'queen', 'king', 'camel', 'horse', 'elephant'],
    ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn'],
    ['null','null','null','null','null','null','null','null'],
    ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],              // =>  Entire Chess board 2DArray
    ['null','null','null','null','null','null','null','null'],
    ['null','null','null','null','null','null','null','null'],
    ['pawn','pawn','pawn','pawn','pawn','pawn','pawn','pawn'],
    ['elephant1', 'horse1', 'camel1', 'queen1', 'king1', 'camel1', 'horse1', 'elephant1'],
  ];

  constructor() {}
  ngOnInit(): void {
    // this.move()

    // console.log('this is from '+this.cPieces.length);
    for (let i = 0; i <= 7; i++){
      console.log(
        this.cPieces[i]
       );

    }
  }

  ngAfterViewInit(): void {

    const g = document.getElementById('mainDiv');
    // for (let i = 0, len = g.children.length; i < len; i++)
    // {
    //     g.children[i].click = function(){
    //         alert(index)  ;
    //     }
    // }
  }

  move(){
      console.log('Clicked');
  }
}
