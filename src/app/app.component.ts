import { Component } from '@angular/core';
import { CaptionItem } from './caption-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string | null; // state variable
  showImg: string | null;

  captionsList: CaptionItem[] = [
    {
      id: 0,
      message: 'Oh my',
      icon: '../assets/WTF.jpg'
    },
    {
      id: 1,
      message: 'ARA ARA',
      icon: `../assets/It's not your, it's ours.png`
    },
    {
      id: 2,
      message: 'NO HOMO',
      icon: `../assets/gonna leave this here.jpg`
    },
    {
      id: 3,
      message: 'Holy shit',
      icon: '../assets/magnificent women.jpg'
    }
  ];

  currentData: CaptionItem[] = this.captionsList.slice();

  constructor() {
    const randomData = this.randomContient();
    this.title = randomData.message;
    this.showImg = randomData.icon;
  }

  handleRandom() {
    if (this.currentData.length !== 0) {
      const randomData = this.randomContient();
      this.title = randomData.message;
      this.showImg = randomData.icon;
    }
  }

  randomContient() {
    const randomIndex = this.random(this.currentData.length);
    const randomData = this.currentData[randomIndex];

    if (this.currentData.length !== 0) {
      this.currentData.splice(randomIndex, 1); // remove that item from the list
    }
    
    console.log(this.currentData);

    return randomData;
  } 

  random(max: number) {
    let currentElement = this.showImg;
    let currentId = 0;
    if (this.currentData.length <= 1) {
      console.log('You have no images left to display');
    } else {
      while (currentElement === this.showImg) {
        currentId = Math.floor(Math.random() * max);
        currentElement = this.currentData[currentId].icon;
      }
    }
    return currentId;
  }

  reset() {
    this.currentData = [...this.captionsList];
    const randomData = this.randomContient();
    this.title = randomData.message;
    this.showImg = randomData.icon;

    if (this.currentData.length > 0) {
      this.showImg = this.currentData[0].icon;
    }
  }
}
