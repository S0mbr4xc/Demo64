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
<<<<<<< HEAD
import { PostComponent } from './components/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
=======
>>>>>>> parent of c02a9d3 (Hosting y servicios de apis)

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
<<<<<<< HEAD
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp({"projectId":"pw64-b5094","appId":"1:574498723596:web:f69a008caeb57ae120db29","storageBucket":"pw64-b5094.appspot.com","apiKey":"AIzaSyA-27N9Rk6p-DFYimivZ_MoY0vh1iTPf9Y","authDomain":"pw64-b5094.firebaseapp.com","messagingSenderId":"574498723596","measurementId":"G-2QNLDCW744"})),
    provideFirestore(() => getFirestore()),
    
=======
    AppRoutingModule
>>>>>>> parent of c02a9d3 (Hosting y servicios de apis)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
