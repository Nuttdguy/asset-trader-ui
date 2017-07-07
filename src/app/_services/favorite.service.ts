import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Injectable()
export class FavoriteService implements OnInit {

  baseFavoriteUrl: string;

  constructor(private http: Http) {
    this.baseFavoriteUrl = 'http://localhost:8080/trader/user/favorite';
  }

  ngOnInit(): void { }

  onSaveCoinAsFavorite(persistUser) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(this.baseFavoriteUrl, persistUser, options ).map(res => res.json());
  }

}
