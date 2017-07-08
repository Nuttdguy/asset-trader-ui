import {ResultWrapper, Api} from '../_models';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class SettingsService {

  resultWrapper: ResultWrapper;
  baseSettingUrl = 'http://localhost:8080/trader/user';
  apiUrl = '/apikey';
  profile = '/profile/update';
  addFriend = '/friend/add';
  getFriendList = '/friend/list';
  deleteFriend = '/friend/delete';
  updatePassword = '/password/update';
  deleteFavorite = '/favorite/delete';
  getFavoriteCoinList = '/favorite/coin/list';

  constructor(private http: Http) {}

  onSaveApiKeyService(keyObject): Observable<ResultWrapper> {
    let url = this.baseSettingUrl + this.apiUrl;
    return this.http.post(url, keyObject).map(res => res.json())
  }

  onUpdateProfile(firstName, lastName, userName): Observable<ResultWrapper> {
    let jsonObj = this.getLocalUser();
    jsonObj['firstName'] = firstName;
    jsonObj['lastName'] = lastName;
    jsonObj['userName'] = userName;

    return this.http.post(this.baseSettingUrl + this.profile, jsonObj).map(res => res.json())
  }

  
  onAddFriendToNetwork(friendDetail): Observable<ResultWrapper> {
    let jsonObj = this.getLocalUser();
    let id = jsonObj['id'];
    friendDetail['id'] = id;
    friendDetail['active'] = true;
    friendDetail['enableSendTo'] = true;

    return this.http.post(this.baseSettingUrl + this.addFriend, friendDetail).map(res => res.json() );
  }

  onViewFriendList(): Observable<ResultWrapper> {
    let jsonObj = this.getLocalUser();
    let id = jsonObj['id'];
    return this.http.get(this.baseSettingUrl + this.getFriendList + '/' + id).map(res => res.json() );
  }

  onDeleteFriend(friendId): Observable<ResultWrapper> {
    return this.http.get(this.baseSettingUrl + this.deleteFriend + '/' + friendId).map(res => res.json() );
  }
  
  onChangePassword(passwordObj): Observable<ResultWrapper> {
    let jsonObj = this.getLocalUser();
    let id = jsonObj['id'];
    passwordObj['id'] = id;
    return this.http.post(this.baseSettingUrl + this.updatePassword, passwordObj).map( res => res.json() );
  }
  
  onGetFavoriteCoin(): Observable<ResultWrapper> {
    let jsonObj = this.getLocalUser();
    let id = jsonObj['id'];
    return this.http.get(this.baseSettingUrl + this.getFavoriteCoinList + '/' + id).map( res => res.json() );
  }
  
  onDeleteFavoriteCoin(tokId): Observable<ResultWrapper> {
    return this.http.delete( this.baseSettingUrl + this.deleteFavorite + '/' + tokId).map( res => res.json() );
  }
  
  
  // ============================================
  // PRIVATE METHODS
  // ============================================

  private getLocalUser(): JSON {
    let user = localStorage.getItem('currentUser'); // GETS THE STRING VALUE OF KEY
    return JSON.parse(user); // CONVERTS INTO A JSON OBJECT
  }

}

