import axios from 'axios'
import { User } from './interface';

export default class UserService {
  getUsers(): Promise<Array<User>> {
    return new Promise<Array<User>>((resolve, reject) => {
      axios.get(`${process.env.API_URL}/users`)
        .then((result) => resolve(result.data.attributes))
        .catch((err) => reject(err));
    });
  }

  updateUser(user: User): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      axios.patch(`${process.env.API_URL}/users`, user)
        .then((result) => resolve(result.data.attributes))
        .catch((err) => reject(err));
    });
  }

  createUser(user: User): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      axios.post(`${process.env.API_URL}/users`, user)
        .then((result) => resolve(result.data.attributes))
        .catch((err) => reject(err));
    });
  }

  deleteUser(userId: string) {
    return new Promise<Array<User>>((resolve, reject) => {
      axios.delete(`${process.env.API_URL}/users?_id=${userId}`)
        .then((result) => resolve(result.data.attributes))
        .catch((err) => reject(err));
    });
  }
}
