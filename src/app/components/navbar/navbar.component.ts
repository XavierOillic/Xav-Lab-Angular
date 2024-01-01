import { Component } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  methodeHtmlTs(receivedFromHtmlEvent: any) {
    console.log(receivedFromHtmlEvent);
    // C'est ici qu'il fait que je mette le Filtre ?!
  }

}
