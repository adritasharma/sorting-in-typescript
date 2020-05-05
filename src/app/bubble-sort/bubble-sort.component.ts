import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bubble-sort",
  templateUrl: "./bubble-sort.component.html",
  styleUrls: ["./bubble-sort.component.css"]
})
export class BubbleSortComponent implements OnInit {
  constructor() {}

  input = [2, 4, 5, 2, 1, 3];

  output = [...this.input];

  ngOnInit() {
    let length = this.output.length;
    let arr = this.output

    for (var i = 0; i < length - 1; i++) {
      for (var j = 0; j < length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
      console.log(arr);
    }
  }
  algorithm = `
   for (var i = 0; i < length - 1; i++) {
      for (var j = 0; j < length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr[j],arr[j + 1])
        }
      }
    }
  `

  notes = [
    `Outer loop is responsible to get the biggest element to the last.`,
    `The inner loop is responsible to swap unsorted adjacent elements`,
    `Iterating  (length -1) times since we need minimum 2 elements to swap`,
    `Inner loop has (length - i - 1) times iteration as for each iteration of outer loop (i), we get largest element at last. Example i= 0, we get largest at last,  so when i= 1, we can skip 1 element`
  ];
}
