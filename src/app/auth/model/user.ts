export class User {
  username: string;
  password: string;
  email?: string;
  public static isNull(user: User): boolean {
    return user.username === null &&
      user.password === null;
  }
}
