import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  templateUrl: './consensi.component.html',
  styleUrls: ['./consensi.component.scss']
})
export class ConsensiComponent {
constructor(private location:Location){}
goBack(): void {
  this.location.back();
}
}
