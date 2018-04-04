import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  templateUrl: './vote-taker.component.html',
  styleUrls: ['./vote-taker.component.css']
})
export class VoteTakerComponent implements OnInit {
@Input() name :string;
@Output() onVoted = new EventEmitter<boolean>();
voted = false;
vote(agreed : boolean){
  this.onVoted.emit(agreed);
  this.voted= true;
}

  constructor() { }

  ngOnInit() {
  }

}
