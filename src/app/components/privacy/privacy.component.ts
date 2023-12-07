import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {
  constructor(private location:Location){}
  goBack(): void {
    this.location.back();
  }

}
