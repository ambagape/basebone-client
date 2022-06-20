
import UserService from "../services/users/users";

export default ({ app }, inject) => {
  // create an instance of the LoggingService with the prefix 'My App'
  const userService = new UserService();

  // inject the service, making it available in the context, component, store, etc.
  inject('userService', userService)
}
