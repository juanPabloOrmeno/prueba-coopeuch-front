import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';


import { FormsModule} from '@angular/forms'


import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiModule, Configuration, ConfigurationParameters} from '../api';
import { InicioComponent } from './pagues/inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




export function apiConfigSwagger(): Configuration{
  const params:ConfigurationParameters = {
    basePath: environment.basePath,
    apiKeys:{["Authorization"]: ''}
  }
  return new Configuration(params);
}

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ApiModule.forRoot(apiConfigSwagger),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
