import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  templateUrl: './assistenza.component.html',
  styleUrls: ['./assistenza.component.scss']
})
export class AssistenzaComponent {
  constructor(private location:Location){}
  goBack(): void {
    this.location.back();
  }

}
