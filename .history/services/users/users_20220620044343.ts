import axios from 'axios'
import { User } from './interface';

export default class UserService {
  getUsers(): Promise<Array<User>> {
    return new Promise<Array<User>>((resolve, reject) => {
      axios.get('users')
        .then((result) => resolve(result.data.attributes))
        .catch((err) => reject(err));
    });
  }

  static updateUser(user: User): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      axios.patch(`users`,user)
        .then((result) => resolve(result.data.attributes))
        .catch((err) => reject(err));
    });
  }

  static createUser(user: User): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      axios.post('users',user)
        .then((result) => resolve(result.data.attributes))
        .catch((err) => reject(err));
    });
  }

  static deleteUser(userId: string) {
    return new Promise<Array<User>>((resolve, reject) => {
      axios.delete(`users?_id=${userId}`)
        .then((result) => resolve(result.data.attributes))
        .catch((err) => reject(err));
    });
  }
}
