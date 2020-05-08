import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-merge-sort",
  templateUrl: "./merge-sort.component.html",
  styleUrls: ["./merge-sort.component.css"]
})
export class MergeSortComponent implements OnInit {
  constructor() {}

  input = [9, 5, 1, 4, 3];

  output = [...this.input];
  passes = [];

  ngOnInit() {
    this.mergeSort([...this.input]);
  }

  mergeSort(arr) {
    let length = arr.length;
    let mid = parseInt(length / 2);
    console.log("mid", mid);

    let left = [];
    let right = [];

    for (let i = 0; i < mid; i++) {
      left[i] = arr[i];
    }

    for (let i = mid; i < length; i++) {
      right[i - mid] = arr[i];
    }

    console.log("left", left);
    console.log("right", right);
  }
}
