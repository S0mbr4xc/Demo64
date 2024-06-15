import { importProvidersFrom, NgModule } from '@angular/core';
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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

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
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp({"projectId":"pw69-c97a0","appId":"1:759758869268:web:82dc23494ae0a671462801","storageBucket":"pw69-c97a0.appspot.com","apiKey":"AIzaSyCTCZ9t3RUjXCy1Ynor4ITByBPls_nqY1k","authDomain":"pw69-c97a0.firebaseapp.com","messagingSenderId":"759758869268","measurementId":"G-4JXNH13NKL"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }