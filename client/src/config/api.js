// API Configuration for different environments
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://ecohack-backend.onrender.com'  // Replace with your actual Render URL
  : 'http://localhost:5000';

export const API_ENDPOINTS = {
  // Auth endpoints
  NGO_LOGIN: `${API_BASE_URL}/api/auth/ngo/loginNGO`,
  NGO_CREATE: `${API_BASE_URL}/api/auth/ngo/createNGO`,
  RES_LOGIN: `${API_BASE_URL}/api/auth/res/loginRES`,
  RES_CREATE: `${API_BASE_URL}/api/auth/res/createRES`,
  USER_LOGIN: `${API_BASE_URL}/api/auth/user/loginUser`,
  USER_CREATE: `${API_BASE_URL}/api/auth/user/createUser`,
  
  // Image upload
  UPLOAD_IMAGE: `${API_BASE_URL}/uploadImage`,
  
  // Packets
  PACKETS: `${API_BASE_URL}/api/auth/res/packets`,
  
  // Mail
  SEND_MAIL: `${API_BASE_URL}/api/auth/res/sendmail`,
  PAYMENT_MAIL: `${API_BASE_URL}/api/auth/res/paymentmail`,
  
  // Orders
  UPDATE_ORDER: (orderId) => `${API_BASE_URL}/api/auth/user/updateorder/${orderId}`,
  
  // Context endpoints
  RES_CONTEXT: `${API_BASE_URL}/api/auth/res`,
  NGO_CONTEXT: `${API_BASE_URL}/api/auth/ngo`,
  ORDER_CONTEXT: `${API_BASE_URL}/api/auth/user`,
};

export default API_BASE_URL;
