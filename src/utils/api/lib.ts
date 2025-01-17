import {
  AddNoteRequest,
  LoginRequest,
  RegisterRequest,
} from "../../types/fetch-utils";
import callAPI from "./call-api";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function getAccessToken() {
  return localStorage.getItem("accessToken");
}

function putAccessToken(accessToken: string) {
  return localStorage.setItem("accessToken", accessToken);
}

// async function fetchWithToken(url, options = {}) {
//   return fetch(url, {
//     ...options,
//     headers: {
//       ...options.headers,
//       Authorization: `Bearer ${getAccessToken()}`,
//     },
//   });
// }

async function login({ email, password }: LoginRequest) {
  const url = `${BASE_URL}/login`;

  return callAPI({
    url,
    method: "POST",
    body: {
      email,
      password,
    },
  });
}

async function register({ name, email, password }: RegisterRequest) {
  const url = `${BASE_URL}/register`;

  return callAPI({
    url,
    method: "POST",
    body: {
      name,
      email,
      password,
    },
  });
}

async function getUserLogged() {
  const url = `${BASE_URL}/users/me`;

  return callAPI({
    url,
    token: getAccessToken(),
  });
}

async function addNote({ title, body }: AddNoteRequest) {
  const url = `${BASE_URL}/notes`;

  return callAPI({
    url,
    method: "POST",
    body: {
      title,
      body,
    },
    token: getAccessToken(),
  });
}

async function getActiveNotes() {
  const url = `${BASE_URL}/notes`;

  return callAPI({
    url,
    token: getAccessToken(),
  });
}

async function getArchivedNotes() {
  const url = `${BASE_URL}/notes/archived`;

  return callAPI({
    url,
    token: getAccessToken(),
  });
}

async function getNote(id: string) {
  const url = `${BASE_URL}/notes/${id}`;

  return callAPI({
    url,
    token: getAccessToken(),
  });
}

async function archiveNote(id: string) {
  const url = `${BASE_URL}/notes/${id}/archive`;

  return callAPI({
    url,
    method: "POST",
    token: getAccessToken(),
  });
}

async function unarchiveNote(id: string) {
  const url = `${BASE_URL}/notes/${id}/unarchive`;

  return callAPI({
    url,
    method: "POST",
    token: getAccessToken(),
  });
}

async function deleteNote(id: string) {
  const url = `${BASE_URL}/notes/${id}`;

  return callAPI({
    url,
    method: "DELETE",
    token: getAccessToken(),
  });
}

export {
  getAccessToken,
  putAccessToken,
  login,
  register,
  getUserLogged,
  addNote,
  getActiveNotes,
  getArchivedNotes,
  getNote,
  archiveNote,
  unarchiveNote,
  deleteNote,
};
