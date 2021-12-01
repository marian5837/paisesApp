import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<any> = new EventEmitter();
  termino: string = '';
  debouncer: Subject<string> = new Subject();
  @Input() placeholder: string = '';

  constructor() { }

  ngOnInit() {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor => {
      console.log('debouncer: ',valor);
      this.onDebounce.emit(valor);
    })
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }

  // teclaPresionada(event: any) {
    teclaPresionada() {
    // const valor = event.target.value;
    // console.log('valor: ',valor);

    // console.log(this.termino);

    this.debouncer.next(this.termino);
  }
}
