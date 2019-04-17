import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//@Injectable()
@Injectable({
  providedIn: 'root'
})
export class GetOnlineDataService {

  constructor(private http: HttpClient) {}

  getOnlineData(){
    this.http.get('https://randomuser.me/api/?results=10')
        .subscribe( data => console.log(data));

        //localStorage.setItem('key', JSON.stringify(object));
  }
}
