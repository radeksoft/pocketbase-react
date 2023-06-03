export class StorageService {
  static Constants = {
    SUBSCRIBED: 'subscribed',
    COOKIE: 'cookie',
  };

  static async get(key: string): Promise<string | null> {
    return localStorage.getItem(key)
  }

  static async set(key: string, value: string): Promise<void> {
    return localStorage.setItem(key, value);
  }

  static async remove(key: string): Promise<void> {
    return localStorage.removeItem(key);
  }
}
