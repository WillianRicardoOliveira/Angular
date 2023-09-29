import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMaiorIdade]',

  providers: [{

    provide: NG_VALIDATORS,
    useExisting: MaiorIdadeDirective,
    multi: true

  }]

})
export class MaiorIdadeDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {

    //throw new Error('Method not implemented.');

    const dataNascimento = control.value

    const anoNascimento = new Date(dataNascimento).getFullYear()
    const anoNascMais18 = anoNascimento + 18
    const anoAtual = new Date().getFullYear()

    const ehMair = anoNascMais18 <= anoAtual

    return ehMair ? null : {'appMaiorIdade': true}

  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }

}
