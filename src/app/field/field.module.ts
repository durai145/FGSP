import { NgModule, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export abstract class FieldModule {
  group: string; /*it has been changed by author on 02-Feb-2010*/
  name: string;
  label: string;
  task: string;
  desc: string;
  htmlType: string; /* newly introduced in USS05*/
  entitle: string; // Editable /Readonly
  enttlname: number; // Entitle name to db
  mndf: string;
  dataType: string;  // NUMBER/VARCHAR/DATE/EMAIL/AMOUNT/LIST/DIV/
  cclass: string;   //
  parent: string;
  parentHtmlType: string;
  validate: string;
  dflt: string;
  min: string;
  max: string;
  tips: string;
  onkeyup: string;
  onchange: string;
  onkeydown: string;
  onkeypress: string;
  onclick: string;
  onblure: string;
  listVal: string;
  help: string;
  helpLink: string;
  xml: string;
  xmlname: string;
  Xpath: string;
  maxCol: string;
  col: string;
  dimensions: string;
  dimensionMax: string;
  dimensionMin: string;
  dataCategory: string;
  camelCase: boolean;
  childs: Array<FieldModule>;

/*
  constructor(jsonAny: FieldModule) {
    this.group = jsonAny.group;
    this.name = jsonAny.name;
    this.label = jsonAny.label;
    this.task = jsonAny.task;
    this.desc = jsonAny.desc;
    this.htmlType = jsonAny.htmlType;
    this.entitle = jsonAny.entitle;
    this.enttlname = jsonAny.enttlname;
    this.mndf = jsonAny.mndf;
    this.dataType = jsonAny.dataType;
    this.cclass = jsonAny.cclass;
    this.parent = jsonAny.parent;
    this.parentHtmlType = jsonAny.parentHtmlType;
    this.validate = jsonAny.validate;
    this.dflt = jsonAny.dflt;
    this.min = jsonAny.min;
    this.max = jsonAny.max;
    this.tips = jsonAny.tips;
    this.onkeyup = jsonAny.onkeyup;
    this.onchange = jsonAny.onchange;
    this.onkeydown = jsonAny.onkeydown;
    this.onkeypress = jsonAny.onkeypress;
    this.onclick = jsonAny.onclick;
    this.onblure = jsonAny.onblure;
    this.listVal = jsonAny.listVal;
    this.help = jsonAny.help;
    this.helpLink = jsonAny.helpLink;
    this.xml = jsonAny.xml;
    this.xmlname = jsonAny.xmlname;
    this.Xpath = jsonAny.Xpath;
    this.maxCol = jsonAny.maxCol;
    this.col = jsonAny.col;
    this.dimensions = jsonAny.dimensions;
    this.dimensionMax = jsonAny.dimensionMax;
    this.dimensionMin = jsonAny.dimensionMin;
    this.dataCategory = jsonAny.dataCategory;
    this.camelCase = jsonAny.camelCase;
    this.childs = jsonAny.childs;
  }
*/

  constructor(jsonAny: FieldModule) {
    this.group = jsonAny.group;
    this.name = jsonAny.name;
    this.label = jsonAny.label;
    this.task = jsonAny.task;
    this.desc = jsonAny.desc;
    this.htmlType = jsonAny.htmlType;
    this.entitle = jsonAny.entitle;
    this.enttlname = jsonAny.enttlname;
    this.mndf = jsonAny.mndf;
    this.dataType = jsonAny.dataType;
    this.cclass = jsonAny.cclass;
    this.parent = jsonAny.parent;
    this.parentHtmlType = jsonAny.parentHtmlType;
    this.validate = jsonAny.validate;
    this.dflt = jsonAny.dflt;
    this.min = jsonAny.min;
    this.max = jsonAny.max;
    this.tips = jsonAny.tips;
    this.onkeyup = jsonAny.onkeyup;
    this.onchange = jsonAny.onchange;
    this.onkeydown = jsonAny.onkeydown;
    this.onkeypress = jsonAny.onkeypress;
    this.onclick = jsonAny.onclick;
    this.onblure = jsonAny.onblure;
    this.listVal = jsonAny.listVal;
    this.help = jsonAny.help;
    this.helpLink = jsonAny.helpLink;
    this.xml = jsonAny.xml;
    this.xmlname = jsonAny.xmlname;
    this.Xpath = jsonAny.Xpath;
    this.maxCol = jsonAny.maxCol;
    this.col = jsonAny.col;
    this.dimensions = jsonAny.dimensions;
    this.dimensionMax = jsonAny.dimensionMax;
    this.dimensionMin = jsonAny.dimensionMin;
    this.dataCategory = jsonAny.dataCategory;
    this.camelCase = jsonAny.camelCase;
    this.childs = jsonAny.childs;
  }

  abstract createField(): any;
}
