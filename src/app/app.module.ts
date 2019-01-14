import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameGeneratorComponent } from './frame-generator/frame-generator.component';
import { SchemaRenderDirective } from './schema-render.directive';

@NgModule({
  declarations: [
    AppComponent,
    FrameGeneratorComponent,
    SchemaRenderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
