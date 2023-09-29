import { ConsultaCepService } from './../../servicos/consulta-cep/consulta-cep.service';
import { Directive } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { Observable, map } from 'rxjs';

@Directive({
  selector: '[validadorCep]',

  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,

      useExisting: ValidandoCepDirective,

      multi: true,
    },
  ],
})
export class ValidandoCepDirective implements AsyncValidator {
  constructor(

    private ConsultaCepService: ConsultaCepService

  ) {}

  validate(
    control: AbstractControl<any, any>
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

    const cep = control.value

    console.log("ESTA VALIDANDO")

    return this.ConsultaCepService.consultaCep(cep).pipe(map(
      (resultado: any) => resultado.erro ? {'validadorCep': true} : null
  ))




  }
//  registerOnValidatorChange?(fn: () => void): void {
  //  throw new Error('Method not implemented.');
  //}
}
