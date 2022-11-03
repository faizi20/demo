import axios from 'axios';

class API {
  constructor() {
    this._initAPI();
  }

  _initAPI() {
    const store = localStorage.getItem('persist:root');
    const userSlice = store ? JSON.parse(store)?.user : null;
    const user = userSlice ? JSON.parse(userSlice)?.user : null;
    const accessToken = user ? user?.accessToken : '';

    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_APP_API_BASE_URL,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  resetAPI(accessToken) {
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_APP_API_BASE_URL,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  get api() {
    return this.axiosInstance;
  }
}

export const axiosInstance = new API();
