import { TextFieldModule } from './../text-field/text-field.module';
import { element } from 'protractor';
import { Component, OnInit, TemplateRef, ViewChild, Renderer2 } from '@angular/core';
import { SchemaModule } from '../schema/schema.module';
import { FieldModule } from '../field/field.module';
import { CONTEXT } from '@angular/core/src/render3/interfaces/view';

@Component({
  selector: 'app-frame-generator',
  templateUrl: './frame-generator.component.html',
  // template: `this is test <ng-template #dynamicTemplate>dynamic</ng-template>`,
  styleUrls: ['./frame-generator.component.css']
})
export class FrameGeneratorComponent implements OnInit {

  constructor() { }

  @ViewChild('dynamicTemplate')
  private  dynamicTemplate;
  testOut: string;
  ngOnInit() {
   // this.dynamicTemplate.nativeEelement

  }
}
