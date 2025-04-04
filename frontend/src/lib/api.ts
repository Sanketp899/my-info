// API base URL based on environment
const isDevelopment = import.meta.env.DEV;

export const API_BASE_URL = isDevelopment 
  ? 'http://127.0.0.1:8000' 
  : 'https://api.quantumfix.com'; // Replace with your production API URL

// API endpoints
export const API_ENDPOINTS = {
  CONTACT: `${API_BASE_URL}/api/contact/`,
};

// Helper function to handle API responses
export async function handleApiResponse(response: Response) {
  if (!response.ok) {
    const error = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(error.message || 'Something went wrong');
  }
  return response.json();
}

// Function to get CSRF token from cookies
export function getCSRFToken(): string {
  const name = 'csrftoken=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return '';
} 