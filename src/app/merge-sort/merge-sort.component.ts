import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-merge-sort",
  templateUrl: "./merge-sort.component.html",
  styleUrls: ["./merge-sort.component.css"]
})
export class MergeSortComponent implements OnInit {
  constructor() {}

  input = [9, 5, 1, 4, 3];
  // input = [9];

  output = [...this.input];
  passes = [];

  ngOnInit() {
    this.mergeSort([...this.input], 0, this.input.length - 1);
  }

  mergeSort(arr, firstIndex, lastIndex) {
    // let length = arr.length;
    let midIndex = parseInt((firstIndex + lastIndex) / 2);

    console.log("arr", arr);
    console.log(firstIndex, lastIndex);
    console.log("mid", midIndex);

    let left = [];
    let right = [];

    for (let i = 0; i <= midIndex; i++) {
      left[i] = arr[i];
    }

    for (let i = midIndex + 1; i <= lastIndex; i++) {
      right[i - midIndex - 1] = arr[i];
    }

    console.log("left", left);
    console.log("right", right);
    console.log("==========================");

    // if (left.length > 1) {
    //   this.mergeSort(left);
    // }

    if (firstIndex < lastIndex) {
      this.mergeSort(left, firstIndex, midIndex);
      this.mergeSort(right, midIndex + 1, lastIndex);
    }
  }
}
