import { LabelFieldModule } from './../label-field/label-field.module';
import { NgModule, Directive, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldModule } from '../field/field.module';
import { TextFieldModule } from '../text-field/text-field.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class SchemaModule extends FieldModule {

  static fromJSON(json: FieldModule|string): FieldModule {
    if (typeof json === 'string') {
      return JSON.parse(json, SchemaModule.reviver);
    }
    return new SchemaModule(json);
  }

  static reviver(key: string, value: any): any {
    return key === '' ? SchemaModule.fromJSON(value) : value;
  }

  toJSON(): FieldModule {
    return Object.assign({}, this, {

    });
  }

  createFieldObj(jsonAny: FieldModule): FieldModule {
    console.log('S:001: ### schema: createFieldObj');
    let schemaFieldModule: FieldModule;
    if (jsonAny) {
      if (jsonAny.htmlType === 'TEXT') {
        console.log('S:002: ### call schema:  createFieldObj :TextFieldModule');
        schemaFieldModule = new TextFieldModule(jsonAny);
      } else if (jsonAny.htmlType === 'LABEL') {
        console.log('S:002: ### call schema:  createFieldObj : LabelFieldModule');
        schemaFieldModule = new LabelFieldModule(jsonAny);
      }

      if (jsonAny.childs) {
        jsonAny.childs.forEach(function(filedObj) {
          schemaFieldModule.childs.push(this.createFieldObj(filedObj));
        });
      }
    }
    return schemaFieldModule;
  }

  createField(): any {
   return this.createFieldObj(this).createField();
  }
}
