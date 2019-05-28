import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {
  url  = 'assets/participant.json';
  constructor(private httpClient: HttpClient) { }

  getParticipantData(){
    return this.httpClient.get(this.url);
  }
}
