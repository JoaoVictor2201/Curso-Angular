import { Component } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animais: Animal[] = [
    {name : 'Freddy', type : 'cachorro', age : 4},
    {name : 'Cleidisneidison', type : 'peixe', age : 2},
    {name : 'Kaka', type : 'passaro', age : 8},
    {name : 'Tarta', type : 'tartaruga', age : 40}
  ]

  animalDetails = '';

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }

}
