import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  baseUrl = 'http://localhost:8080/trader/user/login';

  constructor(private http: Http) { }

  login(username: string, password: string) {
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.set('Access-Control-Allow-Origin', '*');
    
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl, JSON.stringify({ username: username, password: password }), options)
      .map((response: Response) => {
        let user = response.json();

        console.log(user);
        console.log(user.token);
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

}
