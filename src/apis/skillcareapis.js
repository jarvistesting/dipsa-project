import axios from 'axios';

export const resgisterApi = async (payload) => {
  const resp = await fetch("https://dipsa2000.pythonanywhere.com/register", {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(payload),
  });
  const data = await resp.json();
  return data;
};

export const loginApi = async (payload) => {
  const resp = await fetch("https://dipsa2000.pythonanywhere.com/login", {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(payload),
  });
  const data = await resp.json();
  return data;
};

export const getAllCoursesApi = async () => {
  const {data = {}} = await axios.get(
    "https://dipsa2000.pythonanywhere.com/get_all_courses"
  );
  return data;
};

export const getAllUsersApi = async () => {
  const { data = {} } = await axios.get(
    "https://dipsa2000.pythonanywhere.com/get_all_users"
  );
  return data;
};

export const enrollUserToCourseAPI = async (payload) => {
  const resp = await axios.post(
    "https://dipsa2000.pythonanywhere.com/add_course_to_user",
    payload
  );
  const { data = {} } = resp;
  return data;
};

// export const updateCourseStatusAPI = async (payload) => {
//   const resp = await fetch(
//     "http://dipsa2000.pythonanywhere.com/update_course_status",
//     {
//       method: "POST",
//       mode: "cors",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//     }
//   );
//   console.log("updateCourseStatusAPI", payload, resp);
// };
