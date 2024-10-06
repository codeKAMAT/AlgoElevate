import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentCourse } from '../../features/course/courseSlice';

const Breadcrumbs = () => {
  const { currentCourseId, currentCourseName } = useSelector(selectCurrentCourse);

  return (
    <nav className="breadcrumbs">
      <Link to="/classrooms">Classrooms</Link>
      <span> / </span>
      <Link to={`/classroom/${currentCourseId}`}>{currentCourseName || 'Course Name'}</Link>
    </nav>
  );
};

export default Breadcrumbs;
