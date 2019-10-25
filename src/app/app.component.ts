import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstArray = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century'
  ];

  secondArray = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century'
  ];

  correctDrop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.firstArray, event.previousIndex, event.currentIndex);
  }

  incorrectDrop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.secondArray, event.previousIndex, event.currentIndex);
  }
}
