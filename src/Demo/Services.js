import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "./Card";

import get from "lodash/get";
import { isEmpty } from "lodash";
import { getLoggedinDetails } from "../utils";
import {
  getAllCoursesApi,
  enrollUserToCourseAPI,
} from "../apis/skillcareapis";

const Service = () => {
  let navigate = useNavigate();
  const loggedinDetails = getLoggedinDetails();
  const [courses, setCourses] = useState({});
  const [coursesKey, setCoursesKey] = useState([]);

  const fetchCourses = async() => {
    try{
      const data = await getAllCoursesApi();
      const success = get(data, "success", false);
      if (success && data?.courses && !isEmpty(data?.courses)) {
        setCoursesKey(Object.keys(data.courses));
        setCourses(data.courses || {});
      } else if (success && isEmpty(courses)){
        alert("No courses found!");
      } else {
        alert(data?.message || 'Unable to get courses');
      }
    } catch (error) {
      console.error("Error while fetching courses:", error);
      alert("Unable to get courses");
    }
  };

  const enrollUser = async(e, item) => {
    e.preventDefault();
    try {
      const payload = { userName: loggedinDetails?.userName, cid: item};
      const resp = await enrollUserToCourseAPI(payload);
      if (resp?.success) {
        alert('User enrolled successfully!');
      } else if (resp?.message) {
        alert(resp?.message);
      } else {
        alert('Something went wrong!');
      }
    } catch (error) {
      console.error("Enroll user to course error:", error);
      alert("Something went wrong!");
    }
  }

  useEffect(() => {
    if (!loggedinDetails || isEmpty(loggedinDetails)) {
      navigate("/login", { replace: true });
    } else {
      fetchCourses();
    }
  }, []);

  return (
    <>
      <div className="container-fluid mb-5" style={{ height: "100% auto" }}>
        <h1
          className=""
          style={{
            textAlign: "center",
            padding: "50px 0px",
            fontWeight: "700",
            color: "white",
          }}
        >
          Our Services
        </h1>
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {coursesKey?.length
                ? coursesKey.map((val, ind) => {
                    return (
                      <Card
                        key={val}
                        item={val}
                        handleClick={enrollUser}
                        imgsrc={courses[val]?.imgsrc || ""}
                        title={courses[val]?.title || ""}
                        des={courses[val]?.des || ""}
                      />
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
