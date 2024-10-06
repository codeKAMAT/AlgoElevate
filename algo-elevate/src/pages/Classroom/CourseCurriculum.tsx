import React from 'react';
import { useSelector } from 'react-redux';
import {
	Box,
	Typography,
	LinearProgress,
	Card,
	CardContent,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Avatar,
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '../../styles/components/_courseCurriculum.scss';
import Breadcrumbs from './Breadcrumbs';
import VideoSection from './VideoSection';
import { RootState } from '../../app/store'; // Adjust this import based on your store setup
import {
	selectCurrentCourse,
	CourseState,
} from '../../features/course/courseSlice';
import { Share } from '@mui/icons-material';

interface Module {
	name: string;
	duration: string;
	status: 'completed' | 'in-progress' | 'not-started';
}

interface Instructor {
	name: string;
	title: string;
	avatar: string;
}

const CourseCurriculum: React.FC = () => {
	const { currentCourseName, instructor, progress, modules } = useSelector<
		RootState,
		CourseState
	>(selectCurrentCourse);

	if (!currentCourseName || !instructor || progress === undefined || !modules) {
		return <div>Loading course data...</div>;
	}

	return (
		<div className="course-curriculum">
			<Breadcrumbs />
			<Box display="flex" className="content-wrapper">
				<Box flex={4} mr={2}>
					<VideoSection />
					<Card className="about-course">
						<CardContent>
							<Box
								display="flex"
								alignItems="center"
								justifyContent="space-between"
							>
								<Box display="flex" alignItems="center">
									<Avatar
										src={instructor.avatar}
										alt={instructor.name}
										sx={{ width: 56, height: 56 }}
									/>
									<Box ml={2}>
										<Typography variant="h6" className="instructor-name">
											{instructor.name}
										</Typography>
										<Typography variant="body2" className="instructor-title">
											{instructor.title}
										</Typography>
									</Box>
								</Box>
								<Box display={'flex'}>
									<button className="action-button share-button">
										<Share />
									</button>
									<button className="action-button save-button">
										<BookmarkBorderIcon />
									</button>
								</Box>
							</Box>
							<Typography variant="h5" mt={3} mb={2} className="course-title">
								About This Course
							</Typography>
							<Typography variant="body1" className="course-description">
								Unlock your creative potential with our Beginner-Level
								Illustrator Course! Are you ready to embark on a journey into
								the world of digital art and design? Our Mastering Illustrator
								course is perfect for beginners looking to learn the ropes of
								Adobe Illustrator, the industry-standard vector graphics
								software. From crafting stunning graphics to bringing your
								artistic visions to life...
							</Typography>
							<Typography variant="h6" mt={3} mb={2}>
								This Course Suit For:
							</Typography>
							<List className="course-suit-list">
								<ListItem>
									<ListItemIcon>•</ListItemIcon>
									<ListItemText primary="Anyone who wants to start their career & get paid for their illustration design skills." />
								</ListItem>
								<ListItem>
									<ListItemIcon>•</ListItemIcon>
									<ListItemText primary="This course is for beginners, newbies & amateurs in the field of illustration field." />
								</ListItem>
								<ListItem>
									<ListItemIcon>•</ListItemIcon>
									<ListItemText primary="For anyone that needs to add 'Illustrator' to their portfolio." />
								</ListItem>
							</List>
						</CardContent>
					</Card>
				</Box>
				<Box flex={1}>
					<Card>
						<CardContent>
							<Typography variant="h6">
								Your Study Progress {progress}%
							</Typography>
							<LinearProgress
								variant="determinate"
								value={progress}
								className="progress-bar"
							/>
							<Typography variant="body2" className="progress-text">
								Great Job! 🎉 You're on the path to becoming a certified
								Mastering Illustration. Your dedication to learning is
								impressive! Finish strong!
							</Typography>
							<Typography variant="h6" mt={2}>
								Course Completion
							</Typography>
							<List className="module-list">
								{modules.map((module: Module, index: number) => (
									<ListItem key={index} className={module.status}>
										<ListItemIcon>
											{module.status === 'completed' && (
												<CheckCircleIcon color="success" />
											)}
											{module.status === 'in-progress' && (
												<PauseIcon color="primary" />
											)}
											{module.status === 'not-started' && <PlayArrowIcon />}
										</ListItemIcon>
										<ListItemText
											primary={module.name}
											secondary={`${module.duration}`}
										/>
									</ListItem>
								))}
							</List>
						</CardContent>
					</Card>
				</Box>
			</Box>
		</div>
	);
};

export default CourseCurriculum;
