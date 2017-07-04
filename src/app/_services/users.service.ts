import { Users } from '../_models/users.model';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Injectable()
export class UserService {

  baseUrl = 'http://localhost:8080/trader/user';

  constructor(private http: Http) { }

  
  getById(id: number) {
    return this.http.get(this.baseUrl + '/' + id, this.jwt()).map((response: Response) => response.json());
  }

  create(user: Users) {
    return this.http.post(this.baseUrl + '/register', user, this.jwt()).map((response: Response) => response.json());
  }

  update(user: Users) {
    return this.http.put(this.baseUrl + '/' + user.id, user, this.jwt()).map((response: Response) => response.json());
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + '/' + id, this.jwt()).map((response: Response) => response.json());
  }

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      headers.append('Access-Control-Allow-Headers', 'Content-Type');
      headers.set('Content-Type', 'application/json');   
      headers.set('Access-Control-Allow-Origin', '*');  
      return new RequestOptions({ headers: headers });
    }
  }

}
