import { Component, OnInit } from '@angular/core';
import { Reniec } from 'src/app/models/Reniec.model';
import { ReniecService } from 'src/app/services/reniec.service';

@Component({
  selector: 'app-buscar-dni',
  templateUrl: './buscar-dni.component.html',
  styleUrls: ['./buscar-dni.component.css']
})
export class BuscarDniComponent implements OnInit {

  reniec: Reniec;
  dni: any;

  constructor(private reniecService: ReniecService) { }

  ngOnInit(): void {

  }

  buscarDni() {
    this.reniecService.buscarDni(this.dni).subscribe({
      next: (reniecs: Reniec) => {
        this.reniec = reniecs;
        console.log(reniecs);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
