import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  agreed = 0;
  disagreed =0;
  voters =['Mr. John', 'Tommy', 'IQ', 'Mr. Puppy'];

  onVoted(agreed :boolean){
    agreed ? this.agreed++ : this.disagreed++;
    
  }
}
