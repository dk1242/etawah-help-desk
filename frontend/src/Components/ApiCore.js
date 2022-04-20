import { API } from "../config";
import Axios from "axios";

export const CreateOxygenReq = (details) => {
  console.log(details);
  return fetch(`${API}/oxygenreq/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      console.log("a", "d", response, "b");
      return response.json();
    })
    .catch((err) => {
      console.log("b", err);
    });
};
export const CreateBloodDonReq = (details) => {
  console.log(details);
  return fetch(`${API}/blooddon/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      console.log("a", "d", response, "b");
      return response.json();
    })
    .catch((err) => {
      console.log("b", err);
    });
};

export const CreateBloodReq = (details) => {
  console.log(details);
  return fetch(`${API}/bloodreq/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      console.log("a", "d", response, "b");
      return response.json();
    })
    .catch((err) => {
      console.log("b", err);
    });
};

export const CreatePlasmaReq = (details) => {
  console.log(details);
  return fetch(`${API}/plasmareq/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      console.log("a", "d", response, "b");
      return response.json();
    })
    .catch((err) => {
      console.log("b", err);
    });
};

export const CreatePlasmaDonReq = (details) => {
  console.log(details);
  return fetch(`${API}/plasmadon/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      console.log("a", "d", response, "b");
      return response.json();
    })
    .catch((err) => {
      console.log("b", err);
    });
};

export const CreateMedReq = (details) => {
  console.log(details);
  return fetch(`${API}/medicinereq/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      console.log("a", "d", response, "b");
      return response.json();
    })
    .catch((err) => {
      console.log("b", err);
    });
};
export const CreateDocReq = (details) => {
  console.log(details);
  return fetch(`${API}/doctorreq/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      console.log("a", "d", response, "b");
      return response.json();
    })
    .catch((err) => {
      console.log("b", err);
    });
};
export const CreateBedReq = (details) => {
  console.log(details);
  return fetch(`${API}/bedreq/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      console.log("a", "d", response, "b");
      return response.json();
    })
    .catch((err) => {
      console.log("b", err);
    });
};

export const CreateLegalReq = (details) => {
  console.log(details);
  return fetch(`${API}/legalreq/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      console.log("a", "d", response, "b");
      return response.json();
    })
    .catch((err) => {
      console.log("b", err);
    });
};

export const CreateEduReq = (details) => {
  console.log(details);
  return fetch(`${API}/edureq/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      console.log("a", "d", response, "b");
      return response.json();
    })
    .catch((err) => {
      console.log("b", err);
    });
};

export const CreateAnimalProbReq = (details) => {
  console.log(details);
  return fetch(`${API}/problemreq/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      console.log("a", "d", response, "b");
      return response.json();
    })
    .catch((err) => {
      console.log("b", err);
    });
};

export const CreateFoodReq = (details) => {
  console.log(details);
  return fetch(`${API}/foodreq/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      console.log("a", "d", response, "b");
      return response.json();
    })
    .catch((err) => {
      console.log("b", err);
    });
};
export const VolunteerReq = (details) => {
  console.log(details);
  return fetch(`${API}/volunteerreq/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      console.log("a", "d", response, "b");
      return response.json();
    })
    .catch((err) => {
      console.log("b", err);
    });
};
export const GetVaccine = (dateString) => {
  console.log(dateString);
  return fetch(
    `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=645&date=${dateString}`,
    {
      method: "GET",
    }
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const GetAllImagesAPI = () => {
  return Axios.get(`${API}/gallery/all`)
    .then((response) => {
      //   const data = res.data.msg;
      //   setBlogs(data);
      //   console.log(blogs);
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const GetAllEventsAPI = () => {
  return Axios.get(`${API}/events/all`)
    .then((response) => {
      //   const data = res.data.msg;
      //   setBlogs(data);
      //   console.log(blogs);
      return response;
    })
    .catch((err) => {
      return err;
    });
};
