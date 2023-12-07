import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DeleteDialogComponent } from "../delete-dialog/delete-dialog.component";
import { Location } from "@angular/common";

@Component({
  templateUrl: "./impostazioni.component.html",
  styleUrls: ["./impostazioni.component.scss"],
})
export class ImpostazioniComponent {
  constructor(public dialog: MatDialog,
    private location: Location) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DeleteDialogComponent, {
      width: "250px",
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  goBack(): void {
    this.location.back();
  }
}
