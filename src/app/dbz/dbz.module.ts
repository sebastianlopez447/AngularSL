import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page-component';
import { ListComponent } from './component/list/list.component';
import { CharacterComponent } from './component/character/character.component';





@NgModule({
  declarations: [
    /* declaro en componente este caso Page que contiene main-page-component.html
     y el ts. Por lo tanto todo lo que declaro se vera en MainPageComponent*/
    MainPageComponent,
    ListComponent,
    CharacterComponent

  ],
  /* para que se vea en el mundo exterior el componente,
  y todo lo que tenga el html de ese componete */
  exports: [
  MainPageComponent
  ],
  /* lo declaro en el app.Module */
  imports: [
    CommonModule,
    FormsModule,
  
  ]
})
export class DbzModule { }



/*primero genero un modulo cuando creo una seccion como dbz
sacazr el commonModule de otros modulos ya que el princial ya esta cargado en memoria*/
