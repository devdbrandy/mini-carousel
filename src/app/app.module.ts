import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModelContentComponent } from './components/model-content/model-content.component';
import { ModelImageComponent } from './components/model-image/model-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelContentComponent,
    ModelImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
