import { TextFieldModule } from './text-field/text-field.module';
import { SchemaModule } from './schema/schema.module';
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { FieldModule } from './field/field.module';

@Directive({
  selector: '[appSchemaRender]'
})
export class SchemaRenderDirective {
  ingredient = 'mayo';
  constructor(elem: ElementRef, renderer: Renderer2) {
    // const bacon = renderer.createElement('input');
    const fieldModule: FieldModule  = SchemaModule.fromJSON(JSON.stringify({ htmlType: 'TEXT' , dataType : 'LABEL',
      name : 'test', label: 'label', dflt: 'test'}));
    // console.log(bacon);
    // renderer.appendChild(elem.nativeElement, bacon);
    // console.log( fieldModule);
    // console.log('FG:001.001 ### call' + fieldModule.createField());
    // console.log(fieldModule.createField());
    renderer.appendChild(elem.nativeElement, fieldModule.createField());
    document.body.appendChild(fieldModule.createField());
    // renderer.appendChild(elem.nativeElement, renderer.createElement(fieldModule.createField()));
  }

}
