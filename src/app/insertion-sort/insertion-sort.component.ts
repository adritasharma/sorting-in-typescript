import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insertion-sort',
  templateUrl: './insertion-sort.component.html',
  styleUrls: ['./insertion-sort.component.css']
})
export class InsertionSortComponent implements OnInit {

  input = [2, 4, 5, 2, 1, 3];

  output = [...this.input];

  ngOnInit() {
    let length = this.output.length;
    let arr = this.output;

    for (var i = 0; i < length; i++) {
      var key = arr[i];
      var j = i-1;

      // while(j >0 && arr[j] < key){
      //   arr[j+1] = arr[j];
      //   j--;
      // }
      arr[j+1] = key

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
  `;

  notes = [
    `Outer loop is responsible to get the biggest element to the last.`,
    `The inner loop is responsible to swap unsorted adjacent elements`,
    `Iterating  (length -1) times since we need minimum 2 elements to swap`,
    `Inner loop has (length - i - 1) times iteration as for each iteration of outer loop (i), we get largest element at last. Example i= 0, we get largest at last,  so when i= 1, we can skip 1 element`
  ];

  complexity = [
    `Worst Case Time Complexity [ Big-O ]: O(n^2)`,
    `Best Case Time Complexity [Big-omega]: O(n) (Already sorted array)`,
    `Average Time Complexity [Big-theta]: O(n^2)`,
    `Space Complexity: O(1) (A single additional memory space is required i.e. for temp)`
  ];
}