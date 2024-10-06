import React from 'react';
import '../../styles/components/_classroom.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentCourse } from '../../features/course/courseSlice';

// Import your SCSS file
// import '../../styles/components/_classroom.scss';

interface Course {
	id: string;
	name: string;
	duration: string;
	instructor: {
		name: string;
		title: string;
		avatar: string;
	};
	progress: number;
	modules: Array<{
		name: string;
		duration: string;
		status: 'completed' | 'in-progress' | 'not-started';
	}>;
}

const courses: Course[] = [
	{
		id: '1',
		name: 'Mastering Illustration',
		duration: '12 hr 20 min',
		instructor: {
			name: 'John Doe',
			title: 'Senior Illustrator',
			avatar: '/path/to/avatar.jpg',
		},
		progress: 0,
		modules: [
			{
				name: 'Introduction to Illustration',
				duration: '1 hr',
				status: 'in-progress',
			},
			{
				name: 'Master HTML',
				duration: '6 hr',
				status: 'not-started',
			},
			{
				name: 'MASTER CSS',
				duration: '3 hr',
				status: 'not-started',
			},
			{
				name: 'Learn Javascript',
				duration: '4 hr',
				status: 'not-started',
			},
			{
				name: 'Typography',
				duration: '2 hr',
				status: 'not-started',
			},

			// Add more modules as needed
		],
	},
	// Add more courses as required
];

const Classroom: React.FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleCourseClick = (course: Course) => {
		// Dispatch selected course information
		dispatch(
			setCurrentCourse({
				currentCourseId: course.id,
				currentCourseName: course.name,
				instructor: course.instructor,
				progress: course.progress,
				modules: course.modules,
			})
		);

		// Navigate to the course curriculum page
		navigate(`/classroom/${course.id}`);
	};

	return (
		<div className="classroom-page">
			<h2>My Courses</h2>
			<div className="course-grid">
				{courses.map((course) => (
					<div
						key={course.id}
						className="course-card"
						onClick={() => handleCourseClick(course)}
					>
						<h3>{course.name}</h3>
						<p>{course.duration}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Classroom;
