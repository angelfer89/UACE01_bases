import { Component  } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'Thor', 'Ironman', 'Capitan America'];
  heroeBorrado: string = '';

  constructor() { }

  BorrarHeroe(): void {
    this.heroeBorrado = this.heroes.pop() || '';
  }

}
