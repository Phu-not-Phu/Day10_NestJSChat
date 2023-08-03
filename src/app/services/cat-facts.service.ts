import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CatFact } from '../models/cat-facts.model';
import { limitToLast } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatFactsService {
  constructor(private http: HttpClient) {}

  getCatFact(maxLenght: number, limit: number): Observable<CatFact[]> {
    let responeFact = this.http.get<CatFact[]>(
      `https://catfact.ninja/facts?max_length=${maxLenght}&limit=${limit}`
    );

    return responeFact;
  }

  getCatPic(limit: number): Observable<any> {
    let responeImg = this.http.get(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}`
    );
    return responeImg;
  }
}
