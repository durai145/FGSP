import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldModule } from '../field/field.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SelectFieldModule extends FieldModule {

  createField(): HTMLElement {
    const elem = new HTMLElement();
    elem.setAttribute('id', this.group);
    elem.setAttribute('label', this.label);
    elem.setAttribute('mndf', this.mndf);
    const inpStrArr: Array<string> = this.listVal.split('|');
    for (let i = 0; i < inpStrArr.length; i += 2) {
      if (this.dflt === inpStrArr[i]) {
        const option = document.createElement('option');
        option.value = inpStrArr[i];
        option.setAttribute('selected', 'true');
        option.appendChild(document.createTextNode(inpStrArr[i + 1]));
        elem.appendChild(option);
      } else {
        const option = document.createElement('option');
        option.value = inpStrArr[i];
        option.appendChild(document.createTextNode(inpStrArr[i + 1]));
        elem.appendChild(option);
      }
    }
    alert('L001:select');
    console.log(elem.innerHTML);
    return elem;
  }

}
