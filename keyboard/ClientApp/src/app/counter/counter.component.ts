import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }

  public playAudio(src: string) {
    let audio = new Audio();
    audio.src = src;
    audio.load();
    audio.play();
  }

  public playE6() {
    let audio = new Audio();
    audio.src = "../assets/sound/E6.mp3";
    audio.load();
    audio.play();
  }

  public playE5() {
    let audio = new Audio();
    audio.src = "../assets/sound/E5.mp3";
    audio.load();
    audio.play();
  }

  public playEB6() {
    let audio = new Audio();
    audio.src = "../assets/sound/EB6.mp3";
    audio.load();
    audio.play();
  }

}

