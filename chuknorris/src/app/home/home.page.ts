import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  displayJoke() {
    this.deleteJokes();
    const url = `https://api.icndb.com/jokes/random`;

    const jokeDiv = document.getElementsByClassName('jokediv')[0];
    const jokeP = document.createElement('p');
    jokeP.setAttribute('class', 'joke');
    jokeDiv.appendChild(jokeP);

    fetch(url)
      .then((res) => res.json())
      .then((joke) => (jokeP.textContent = joke.value.joke))
      .catch((err) => console.error(err));
  }

  deleteJokes() {
    const jokeDiv = document.getElementsByClassName('jokediv')[0];
    jokeDiv.innerHTML = '';
  }
}
