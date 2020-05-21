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
    var pos = this.BinarySearch(this.array, 40);
    console.log("pos", pos);
  }

  BinarySearch(A: Array<number>, element) {
    let n = A.length;

    let start = 0;
    let end = n - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      console.log("---------------------");
      console.log("start", start);
      console.log("mid", mid);
      console.log("end", end);

      if (A[mid] == element) {
        return mid;
      } else if( element < A[mid]) {
	        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return -1;
  }
}
