import { AbstractControl,ValidatorFn } from '@angular/forms';

export function passwordMatch(password: AbstractControl): ValidatorFn {
  return(control: AbstractControl): {[key: string]: any} => {
    return (control.value == password.value)?null:{nomatch: true};
  }
}
