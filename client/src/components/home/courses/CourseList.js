import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./CourseList.css"; 

const CourseList = () => {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const res = await fetch('http://localhost:3001/getcourse', {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          credentials: "include"
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setCourseData(data.Data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourseData();
  }, []);

  return (
    <div>
      {courseData.length > 0 ? (
        courseData.map(course => (
          <div className="card" key={course.id}>
            <div className="cardwrapper">
              <div className="imgwrapper">
                <img src={course.courseImage} className="imgwrap" alt="Course" />
              </div>
              <div className="cardwrap">
                <div className="cardbody">
                  <h5 className="cardtitle">{course.courseName}</h5>
                  <p className="cardtext">{course.description}</p>
                  <p className="cardduration">{course.duration}</p>
                  <Link to={`/detail`}>View Details</Link> {/* Update Link to pass course ID */}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CourseList;

// CourseList.js

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import "./CourseList.css"; 

// const CourseList = () => {
//   const [courseData, setCourseData] = useState([]);

//   useEffect(() => {
//     const fetchCourseData = async () => {
//       try {
//         const res = await fetch('http://localhost:3001/getcourse', {
//           method: "GET",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json"
//           },
//           credentials: "include"
//         });

//         if (!res.ok) {
//           throw new Error("Failed to fetch data");
//         }

//         const data = await res.json();
//         setCourseData(data.Data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchCourseData();
//   }, []);

//   return (
//     <div>
//       {courseData.length > 0 ? (
//         courseData.map(course => (
//           <div className="card" key={course.id}>
//             <div className="cardwrapper">
//               <div className="imgwrapper">
//                 <img src={course.courseImage} className="imgwrap" alt="Course" />
//               </div>
//               <div className="cardwrap">
//                 <div className="cardbody">
//                   <h5 className="cardtitle">{course.courseName}</h5>
//                   <p className="cardtext">{course.description}</p>
//                   <p className="cardduration">{course.duration}</p>
//                   {/* Link to CourseDetails for each specific course */}
//                   <Link to={`/detail/${course.id}`}>View Details</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default CourseList;
