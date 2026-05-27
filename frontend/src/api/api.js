/*
const API_URL = "http://localhost:3000/api";

export default API_URL;

export async function getProperties() {
  const response = await fetch(`${API_URL}/properties`);

  if (!response.ok) {
    throw new Error("Failed to fetch properties");
  }

  return response.json();
}
*/

/**
 * Mocked property data used for frontend deployment.
 */
import properties from "@/data/properties.json";

const API_URL = "mocked-data";

export default API_URL;

/**
 * Returns all properties.
 *
 * @returns {Promise<Array>}
 */
export async function getProperties() {
  return properties;
}
