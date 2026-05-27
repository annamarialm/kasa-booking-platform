/**
 * Base API URL used for backend requests.
 */
const API_URL = "http://localhost:3000/api";

export default API_URL;

/**
 * Fetches all available properties from the API.
 *
 * @returns {Promise<Object[]>} List of properties
 * @throws {Error} If the request fails
 */
export async function getProperties() {
  const response = await fetch(`${API_URL}/properties`);

  if (!response.ok) {
    throw new Error("Failed to fetch properties");
  }

  return response.json();
}
