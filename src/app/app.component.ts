import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('drawer') drawer: any;

  constructor() {}

  closeDropdown() {
    // Chiudi il dropdown
    this.toggleNavbar();
    console.log('ciao');
  }

  private toggleNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    navbarToggler.click();
  }

  title = 'bologna';
}
