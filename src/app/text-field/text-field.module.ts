import { SchemaModule } from './../schema/schema.module';
import { NgModule, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldModule } from '../field/field.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TextFieldModule extends FieldModule {
  constructor(jsonAny: FieldModule) {
    super(jsonAny);
    console.log('Text Field');
  }

  createField(): any {
    console.log('create Text Filed');
    const elem = document.createElement('input');
    elem.setAttribute('id', this.group + this.name);
    elem.setAttribute('label', this.label);
    elem.setAttribute('mndf', this.mndf);
    elem.setAttribute('value', this.dflt);
    elem.setAttribute('readonly', 'false');
    return elem;
  }
}
