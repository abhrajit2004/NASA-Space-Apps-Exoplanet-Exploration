import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const useStore = create((set) => ({
  user: null,
  token: localStorage.getItem('eduexo-token') || null,
  isLoggingOut: false,
  checkingAuth: false,
  auth: async (username) => {
    set({ checkingAuth: true });
    try {
      const res = await axios.post(`${API_URL}/api/auth/auth`, { username });
      localStorage.setItem('eduexo-token', res.data.token);
      console.log('res.data:', res.data);
      set({ user: res.data.user, token: res.data.token, checkingAuth: false });
    } catch (error) {
      console.error(error.response.data.message || "Error in authentication");
      set({ checkingAuth: false });
    }
  },
  logout: async () => {
    set({ isLoggingOut: true });
    try {
      // await axios.post(`${API_URL}/api/auth/logout`);
      localStorage.removeItem('eduexo-token');
      set({ user: null, token: null, isLoggingOut: false });
    } catch (error) {
      console.error(error.response.data.message || "Error in logging out");
      set({ isLoggingOut: false });
    }
  },
  getAuth: async () => {
    set({ checkingAuth: true });
    try {
      const res = await axios.get(`${API_URL}/api/auth/getAuth`);
      set({ user: res.data.user, checkingAuth: false });
    } catch (error) {
      console.error(error.response.data.message || "Error in getting auth");
      set({ user: null, checkingAuth: false });
    }
  },
}));