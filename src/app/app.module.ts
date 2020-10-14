import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';


import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiModule, Configuration, ConfigurationParameters} from '../api';
import { InicioComponent } from './pagues/inicio/inicio.component';








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
    ApiModule.forRoot(apiConfigSwagger),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
