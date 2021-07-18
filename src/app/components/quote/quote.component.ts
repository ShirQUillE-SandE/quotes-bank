import { Component, OnInit } from '@angular/core';
import { Quotes } from '../../quotes';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote:Quotes[]=[
    new Quotes(1, 'Nelson Mandela', 'Motivational', 'It always seems impossible until it is done.', 0, 0,),
    new Quotes(2, 'Groucho Marx', 'Funny', 'I refuse to join any club that would have me as a member.', 0,0,),
    new Quotes(3, 'Friedrich Nietzsche', 'Life', 'He who has a why to live can bear almost any how.', 0, 0,),
    
  ]
  completeGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)
      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    // quote.likes = quoteLength;
    this.quote.push(quote);
  }
  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }


  constructor() { }
  ngOnInit(): void {
  }
}