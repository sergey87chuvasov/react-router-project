import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import courses from '../data/courses';
import { useState } from 'react';

const Courses = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const [sortKey, setSortKey] = useState(query.sort);
  console.log(sortKey);

  // console.log(location);
  // console.log(query);

  const [sortedCourses, setSortedCourses] = useState();

  return (
    <>
      <h1>Courses</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <Link to={course.slug} className='courseLink'>
            {course.title}{' '}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Courses;
