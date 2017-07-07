export class LocalStorageUser {
  
  success: boolean;
  message: string;
  firstName: string;
  lastName: string;
  token: string;
  userName: string;
  id: number;
  active: boolean;
  
  LocalStorageUser(success, message, firstName, lastName, token, userName, id, active) {
    this.success = success;
    this.message = message;
    this.firstName = firstName;
    this.lastName = lastName;
    this.token = token;
    this.userName = userName;
    this.id = id;
    this.active = active;
  }
  
}

