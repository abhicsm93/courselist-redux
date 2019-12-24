const url = "http://localhost:8900";

export function courseList() {
  const output = fetch(`${url}/courses`, { method: "GET" }).then(response =>
    response.json()
  );
  return {
    type: "GET_COURSES",
    payload: output
  };
}

export function enquiryList() {
  const output = fetch(`${url}/enquiries`, { method: "GET" }).then(response =>
    response.json()
  );
  return {
    type: "GET_ENQUIRIES",
    payload: output
  };
}

export function updateEnquiry(data) {
  const output = fetch(`${url}/enquiries`, {
    method: "POST",
    headers: { Accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify(data)
  }).then(response => response.json());
  return {
    type: "POST_ENQUIRIES",
    payload: output
  };
}
