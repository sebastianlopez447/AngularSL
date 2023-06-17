import { Component,Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
      /* ahora veremos como pasa informacion del padre al hijo
      ej: desde main-page(como padre)  listado de personajes
       a a list.componet (como hijo)
      la comuncacion se hace con @Input */

  @Input()

       /* con Input , ponendiendo eldecorador, sobre una propiety,
        le estoy dicienbdo q el ListComponente va a resivir una property(characterList)
       */
public characterList : Character [] = [{
 name: 'Trunks',
 power:10

}]
     /* Trunks solamanet aparece por defecto,
     hasta que aparece lo q viene por main-page.component
      osea lo q viene o comunica con el padre*/
}
