import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  items = [
    { display: "Bubble Sort", path: "bubble-sort" },
    { display: "Selection Sort", path: "selection-sort" },
    { display: "Insertion Sort", path: "insertion-sort" },
    { display: "Merge Sort", path: "merge-sort" },
    { display: "Binary Search", path: "binary-search" }
  ];
}
