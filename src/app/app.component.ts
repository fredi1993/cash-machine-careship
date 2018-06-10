import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';



  constructor() {

    //console.log(this.deliverNotes(160));
    //console.log(this.deliverNotes(30));
    //console.log(this.deliverNotes(80));
    //console.log(this.deliverNotes(900));
    //console.log(this.deliverNotes(125)); Throws NoteUnavailableException error
    //console.log(this.deliverNotes(-130)); Throws InvalidArgumentException error

  }


  deliverNotes(reqAmount) {
    var availableNotes = [100, 50, 20, 10],
      result = [];

    if (reqAmount && reqAmount > 0) {
      // Decrease the required amount with the available notes till 0 or error thrown
      while (reqAmount > 0) {

        // Loop through available notes
        for (var i = 0; i < availableNotes.length; i++) {

          //If 
          if (reqAmount - availableNotes[i] >= 0) {

            // Decrease it from the total reqAmount and push it into the result array
            reqAmount -= availableNotes[i];
            result.push(availableNotes[i]);

            // IMPORTANT: In order so we stay at the same index of the notes we use break to break out
            // of the loop and if the while loop is still applicable then get back again at the available notes from the beggining
            break;
          } else if (i === availableNotes.length - 1 && reqAmount > 0) {
            throw new Error('NoteUnavailableException')
          }

        }
      }
    } else if (reqAmount == undefined) {  // Undefined parameter
      result = [];
    } else if (reqAmount <= 0) {
      throw new Error('InvalidArgumentException')
    }

    return result;
  }


}
