import sendRequest from "./send-requests";

const BASE_URL = "/api/notes";

export function create(newN) {
  return sendRequest(BASE_URL, "POST", newN);
}

export function getNotes(user) {
  return sendRequest(`${BASE_URL}/userNote`, "GET", user);
}

export async function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
}
