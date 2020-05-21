import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-binary-search",
  templateUrl: "./binary-search.component.html",
  styleUrls: ["./binary-search.component.css"]
})
export class BinarySearchComponent implements OnInit {
  constructor() {}

  array = [10, 20, 30, 40, 50];

  ngOnInit() {
    this.BinarySearch(this.array, 20);
  }

  BinarySearch(A:Array<number>, element) {
    let n = A.length;

    let start = 0;
    let end = n-1;

    while(start <= end){
      let mid = (start + end)/2;
    }
  }
}
