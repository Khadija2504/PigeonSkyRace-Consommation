import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PigeonService {
  private baseUrl = 'http://localhost:8900/api/breeder';

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  constructor(private http: HttpClient) { }
  addPigeon(PigeonData: any) : Observable<any> {
    return this.http.post(`${this.baseUrl}/addPigeon`, PigeonData);
  }

  private getpigeonsurl = `${this.baseUrl}/getAllPigeons`

  getPigeons(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.get<any>(this.getpigeonsurl, { headers });
  }

}
