import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-insertion-sort",
  templateUrl: "./insertion-sort.component.html",
  styleUrls: ["./insertion-sort.component.css"]
})
export class InsertionSortComponent implements OnInit {
  input = [9,5,1,4,3];

  output = [...this.input];
  passes = [];

  ngOnInit() {
    let length = this.output.length;
    let arr = this.output;

    for (var i = 1; i < length; i++) {
      var key = arr[i];
      var j = i - 1;

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
      console.log(arr);
      this.passes.push([...arr]);
    }
  }
  algorithm = `
    for (var i = 1; i < length; i++) {
        var key = arr[i];
        var j = i-1;

        while(j >= 0 && arr[j] > key){
          arr[j+1] = arr[j];
          j--;
        }
        arr[j+1] = key
    }
  `;

  notes = [
    `The first element in the array (i=0) is assumed to be sorted, therefore in outer loop (unsorted loop), i started from 1.`,
    "The first element of the unsorted part is taken as key",
    "the last element of the sorted array is taken as j",
    "the sorted part is looped from last element (j) to first (j=0) and all the elements  greater than key are is shifted one position ahead",
    "When the element smaller than the key is found, it is places in the sorted array correct position."
  ];

  complexity = [
    `Worst Case Time Complexity [ Big-O ]: O(n^2)`,
    `Best Case Time Complexity [Big-omega]: O(n) (Already sorted array)`,
    `Average Time Complexity [Big-theta]: O(n^2)`,
    `Space Complexity: O(1) (A single additional memory space is required i.e. for temp)`
  ];
}
