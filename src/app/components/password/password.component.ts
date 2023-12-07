import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
  constructor(private location:Location){}
  goBack(): void {
    this.location.back();
  }

}
