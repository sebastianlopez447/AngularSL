import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})


export class CharacterComponent {
  public character : Character = {
    name: '',
    power: 0

  };

}

/* buscar informacion para testin en angular */
