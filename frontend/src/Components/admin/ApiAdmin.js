import { API } from "../../config";
import Axios from "axios";

export const getOxygenReqs = async (userId, token) => {
  return await fetch(`${API}/oxygenreqs/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const DeleteOxygenReqs = async (userId, token, details) => {
  // console.log(details);
  return await fetch(`${API}/oxygenreq/delete/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const DeleteAnimalReqs = async (userId, token, details) => {
  // console.log(details);
  return await fetch(`${API}/problemreq/delete/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const DeleteBloodDonReqs = async (userId, token, details) => {
  // console.log(details);
  return await fetch(`${API}/blooddon/delete/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const DeleteBloodReqs = async (userId, token, details) => {
  // console.log(details);
  return await fetch(`${API}/bloodreq/delete/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const DeleteDoctorReqs = async (userId, token, details) => {
  // console.log(details);
  return await fetch(`${API}/doctorreq/delete/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const DeleteFoodReqs = async (userId, token, details) => {
  // console.log(details);
  return await fetch(`${API}/foodreq/delete/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const DeleteBedsReqs = async (userId, token, details) => {
  // console.log(details);
  return await fetch(`${API}/bedreq/delete/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const DeleteMedsReqs = async (userId, token, details) => {
  // console.log(details);
  return await fetch(`${API}/medicinereq/delete/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const DeleteVolunteerReqs = async (userId, token, details) => {
  // console.log(details);
  return await fetch(`${API}/volunteerreq/delete/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const DeleteLegalReqs = async (userId, token, details) => {
  // console.log(details);
  return await fetch(`${API}/legalreq/delete/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const DeleteEduReqs = async (userId, token, details) => {
  console.log(details);
  return await fetch(`${API}/edureq/delete/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getHosBedsReqs = async (userId, token) => {
  return await fetch(`${API}/bedreqs/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      // console.log(typeof response, response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getBloodDonReqs = async (userId, token) => {
  return await fetch(`${API}/blooddons/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      // console.log(typeof response, response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getBloodsReqs = async (userId, token) => {
  return await fetch(`${API}/bloodreqs/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      // console.log(typeof response, response);
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getMedsReqs = async (userId, token) => {
  return await fetch(`${API}/medicinereqs/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      // console.log(typeof response, response);
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getDOcsReqs = async (userId, token) => {
  return await fetch(`${API}/doctorreqs/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      // console.log(typeof response, response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getAnimalsReqs = async (userId, token) => {
  return await fetch(`${API}/problemreqs/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      // console.log(typeof response, response);
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getFoodsReqs = async (userId, token) => {
  return await fetch(`${API}/foodreqs/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      // console.log(typeof response, response);
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getVolunteersReqs = async (userId, token) => {
  return await fetch(`${API}/volunteerreqs/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      // console.log(typeof response, response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getLegalReqs = async (userId, token) => {
  return await fetch(`${API}/legalreqs/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      // console.log(typeof response, response);
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getEduReqs = async (userId, token) => {
  return await fetch(`${API}/edureqs/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      // console.log(typeof response, response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const UploadNewImageAPI = (uploadImageData, token, userId) => {
  // console.log(API);
  return Axios.post(`${API}/gallery/addnew/${userId}`, uploadImageData, {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      // console.log(response);
      return response;
    })
    .catch((err) => console.log(err));
};

export const DeleteImageAPI = async (userId, token, details) => {
  // console.log(details);
  return await fetch(`${API}/gallery/delete/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const AddNewEventAPI = (addEventData, token, userId) => {
  // console.log(API);
  return Axios.post(`${API}/event/addnew/${userId}`, addEventData, {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      // console.log(response);
      return response;
    })
    .catch((err) => console.log(err));
};

export const DeleteEventAPI = async (userId, token, details) => {
  // console.log(details);
  return await fetch(`${API}/event/delete/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const ToggleLiveEventAPI = async (userId, token, details) => {
  // console.log(details);
  return await fetch(`${API}/event/toggle/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const UpdateEventAPI = async (details, token, userId) => {
  // console.log(API);
  return Axios.put(`${API}/event/update/${userId}`, details, {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      // console.log(response);
      return response;
    })
    .catch((err) => console.log(err));
};

export const UpdateImageAPI = async (details, token, userId) => {
  // console.log(API);
  return Axios.put(`${API}/gallery/update/${userId}`, details, {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      // console.log(response);
      return response;
    })
    .catch((err) => console.log(err));
};
