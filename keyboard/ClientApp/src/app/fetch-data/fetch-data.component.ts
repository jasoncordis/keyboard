import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[] = [];

  public notesArr: string[] = [];

  public index: number = 0;

  public currNote: string = "";

  public score: number = 0; 

  public playAudio(src: string) {

    console.log(this.index)
    console.log(this.notesArr.length)


    if (this.index == this.notesArr.length - 1) {
      let showNewNote = document.getElementById('currNote')!.innerHTML = 'GOOD'
      let audio = new Audio();
      audio.src = src;
      audio.load();
      audio.play();
    }

    else {
      let changeNote = this.currNote

      const keys = Array.from(document.getElementsByClassName('key') as HTMLCollectionOf<HTMLElement>)

      keys.forEach(box => {
        box.style.backgroundColor = 'white';
      });

      const sharp = Array.from(document.getElementsByClassName('sharp') as HTMLCollectionOf<HTMLElement>)

      sharp.forEach(box => {
        box.style.backgroundColor = 'black';
      });


      let audio = new Audio();
      audio.src = src;
      audio.load();
      audio.play();
      ++this.index;

      if(this.notesArr[this.index] == 'rest') {
        ++this.index;
      }


      this.currNote = this.notesArr[this.index];

      let newNote = this.currNote;

      console.log("yo")
      console.log(this.index);
      console.log(newNote)


      let a1 = getComputedStyle(document.getElementById(newNote)!)
      console.log(a1.marginLeft)
      let node = document.getElementById('node1')!.style.marginLeft = a1.marginLeft
      let node1 = document.getElementById('node1')!.style.width = a1.width
      let node2 = document.getElementById('node1')!.offsetHeight

      let showNewNote = document.getElementById('currNote')!.innerHTML = newNote;
      if (document.getElementById('currNote')!.style.color = "blue") {
        let currNoteStyle = document.getElementById('currNote')!.style.color = "green"
        let currNoteStyle1 = document.getElementById(newNote)!.style.backgroundColor = "green"
      }
      else if (document.getElementById('currNote')!.style.color = "green") {
        let currNoteStyle = document.getElementById('currNote')!.style.color = "red"
        let currNoteStyle1 = document.getElementById(newNote)!.style.backgroundColor = "red"
      }
      else if (document.getElementById('currNote')!.style.color = "red") {
        let currNoteStyle = document.getElementById('currNote')!.style.color = "blue"
        let currNoteStyle1 = document.getElementById(newNote)!.style.backgroundColor = "blue"
      }
    }

  }

  public changeNote(){

    setTimeout(() => { console.log('hello'); this.changeNote() }, 2000);

}


  public begin() {

    setTimeout(() => { this.changeNote() }, 1000);

    const notes = document.getElementById('keyNotes')!.innerHTML
    const arr = notes.split(',');
    this.notesArr = arr
    console.log(this.notesArr)
    console.log(arr[0])

    let timeDelay = 0

    for (let i = 0; i < arr.length; i++) {

      if (arr[i] != 'rest') {
        let nodeCreate = `node${i}`
        const el = document.createElement('button');
        el.setAttribute('class', 'node');
        el.setAttribute('id', nodeCreate);

        const box = document.getElementById('nodes')?.appendChild(el);


        let a1 = getComputedStyle(document.getElementById(arr[i])!)
        let node = document.getElementById(nodeCreate)!.style.marginLeft = a1.marginLeft
        let node7 = document.getElementById(nodeCreate)!.style.width = a1.width

        setTimeout(() => {
          let nodewe = document.getElementById(nodeCreate)!.style.animation = "mymove 2s linear";
        }, timeDelay);
      }

      timeDelay = timeDelay + 1000;

    }



    let currKeyStyle = document.getElementById(arr[0])!.style.backgroundColor = "blue"

    let currNote = document.getElementById('currNote')!.innerHTML = arr[0]
    let currNoteStyle = document.getElementById('currNote')!.style.color = "blue";

    currNote = arr[0];

  }

  public nextNoteFunc() {
    let nextNote = this.notesArr[this.index];
    let currNote = document.getElementById('currNote')!.innerHTML = nextNote;
    ++this.index;

  }


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}


interface WeatherForecast {
  notes: Array<string>;

}

