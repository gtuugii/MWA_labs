import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//@Injectable()
@Injectable({
  providedIn: 'root'
})

export class DataService {
  private url = 'https://randomuser.me/api/?results=10';

  constructor(public http: HttpClient) {}

  getOnlineData(){

    //return this.http.get(this.url);
    //localStorage.setItem('key', JSON.stringify(object));
    // let myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'application/json');

    this.http.get(this.url)
      .subscribe( data => {
        console.log(data);
        localStorage.setItem('usersData', JSON.stringify(data));
      });

  }
  getCachedData(){
    const data = JSON.parse(localStorage.getItem('usersData'));
    if (data.hasOwnProperty('results')) return data.results;
    else return {};
  }

  // getUserById(id: string): any{
  //   return JSON.parse(localStorage.getItem("usersData")).find((user) => user.login.uuid == id);

  // }

  // postUserData(body: any) {
  //   this.http.post(this.url, body)
  //     .subscribe( res => console.log(res),
  //       err => console.log(err));

  // }

}
