import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../shared/material/material.module';
import { ContentComponent } from './content/content.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    ContentComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    ComponentsModule,
    MaterialModule
  ],
  exports: [
    ToolbarComponent,
    ContentComponent
  ]
})
export class TemplatesModule { }
