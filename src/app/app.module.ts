import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './component/create/create.component';
import { ReadComponent } from './component/read/read.component';
import { EditComponent } from './component/edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewserviceService } from './service/newservice.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [NewserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
