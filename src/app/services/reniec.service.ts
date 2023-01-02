import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reniec } from '../models/Reniec.model';

@Injectable({
  providedIn: 'root'
})
export class ReniecService {

  constructor(private http: HttpClient) { }

  buscarDni(dni: any) {
    return this.http.get<Reniec>(`https://dniruc.apisperu.com/api/v1/dni/${dni}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InNlbmlvcmJpZ290ZXM0MkBnbWFpbC5jb20ifQ.cSSg-pq-DI5QCeuivT-N-VT69cRcv-XHTJJu51DEZ-c`);
  }
}
