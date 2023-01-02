import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarDniComponent } from './pages/buscar-dni/buscar-dni.component';

const routes: Routes = [
  { path: '', component: BuscarDniComponent, title: 'Buscar por DNI' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
