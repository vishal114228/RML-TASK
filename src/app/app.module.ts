import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/material.module';
import { CommonComponentsModule } from './common-components/common-components.module';
import { DialogComponent } from './common-components/dialog/dialog.component';
import { CustomToastComponent } from './common-components/custom-toast/custom-toast.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CustomToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    CommonComponentsModule
  ],
  entryComponents: [DialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
