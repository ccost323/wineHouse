import { AbstractControl, ValidatorFn } from "@angular/forms";

const VALID_NAME = ["Laya", "K-Naina", "Verdejo", "Monstrell"];

export function wineNameValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const forbidden = !VALID_NAME.includes(control.value)
    return forbidden ? { wineNameInvalid:  true } : null;
  };
}