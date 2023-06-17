import { Component, } from '@angular/core';
import { Character } from '../interfaces/character.interface';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

/* *****VER CONSEPTO BIEN DE INTERFACES *******/

export class MainPageComponent {

       /* para escribir un corchete es : alt+91 */

     /* atraves de Input decimos que el listado echo en
       Character va alist.component*/

public character: Character [] = [{

name:'Krillin',
power:1000
},{
  name: 'Goku',
  power:9500

},{
name: 'Vegeta',
power:7500

}];
}
