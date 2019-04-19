import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private url = 'http://localhost:8888';

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    this.http.post(this.url + '/login', {"email": email, "password": password})
      .subscribe(
        err => console.log(err),
        data => {
          localStorage.setItem('token', data.toString());
        }
      );
  }

  verify() {
    this.http.get(this.url + '/protected').subscribe(
      err => console.log(err),
      data => console.log(data)
    );
  }

}


