import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SumaComponent } from './components/suma/suma.component';
import { RestaComponent } from './components/resta/resta.component';
import { MultiplicacionComponent } from './components/multiplicacion/multiplicacion.component';
import { DivisionComponent } from './components/division/division.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { AcercadeComponent } from './components/acercade/acercade.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SumaComponent,
    RestaComponent,
    MultiplicacionComponent,
    DivisionComponent,
    SesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
