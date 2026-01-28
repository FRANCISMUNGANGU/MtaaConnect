import api from '../api/axios';

export const auth = {
  signup: async (userData) => {
    const response = await api.post('/users/new/', userData);
    return response.data;
  },

  login: async (credentials) => {
    const response = await api.post('/auth/login/', credentials); 
    
    if (response.data.access) {
      localStorage.setItem('accessToken', response.data.access);
    }
    return response.data;
  },

  getUserProfile: async () => {
    const response = await api.get('/users/me/');
    return response.data;
  },

  logout: async () => {
    try {
      await api.post('/auth/logout/');
    } finally {
      localStorage.removeItem('accessToken');
    }
  },

  getEvents: async () => {
    const response = await api.get('/events/');
    return response.data;
  },

  getEventById: async (id) => {
    const response = await api.get(`/events/${id}/`);
    return response.data;
  }

};