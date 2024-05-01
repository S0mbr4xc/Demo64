import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { SumaComponent } from './components/suma/suma.component';
import { RestaComponent } from './components/resta/resta.component';
import { MultiplicacionComponent } from './components/multiplicacion/multiplicacion.component';
import { DivisionComponent } from './components/division/division.component';
import { AcercadeComponent } from './components/acercade/acercade.component';

const routes: Routes = [
  {path: "components/inicio", component: InicioComponent},
  {path: "components/suma", component: SumaComponent},
  {path: "components/resta", component: RestaComponent},
  {path: "components/multiplicacion", component: MultiplicacionComponent},
  {path: "components/division", component: DivisionComponent},
  {path: "components/acercade", component: AcercadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
