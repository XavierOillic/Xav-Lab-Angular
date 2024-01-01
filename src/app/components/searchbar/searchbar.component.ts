import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {

  @Output() myrtilleVersParent = new EventEmitter();

  methodeSaisieFraise(lEventDuHtml : any) {
    this.myrtilleVersParent.emit(lEventDuHtml.target.value);
    //console.log(lEventDuHtml.target.value);
  }

}
