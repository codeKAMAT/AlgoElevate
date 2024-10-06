// src/components/Layout.tsx
import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { signOut } from 'firebase/auth'; // Import signOut function
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { auth } from '../firebase'; // Adjust the path based on your Firebase configuration
import { Logout, Settings, Notifications } from '@mui/icons-material';
interface LayoutProps {
	children: React.ReactNode;
}
import '../styles/components/_layout.scss'; // Import your SCSS styles

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const [collapsed, setCollapsed] = useState(false);
	const navigate = useNavigate(); // Hook for navigation

	const handleLogout = async () => {
		try {
			await signOut(auth); // Sign out the user
			navigate('/login'); // Redirect to login page
		} catch (error) {
			console.error('Error logging out:', error); // Log any errors
		}
	};

	return (
		<Box className="layout-container">
			<nav className={`navbar ${collapsed ? 'collapsed' : ''}`}>
				<div className="search-bar">
					<input type="text" placeholder="Search..." />
				</div>
				<div className="menu">
					<a href="/">Home</a>
					<a href="/classrooms">Classroom</a>
					<a href="/coach-booking">Coaching</a>
					<a href="/resume">Resume</a>
					<a href="/settings">Settings</a>
				</div>
			</nav>

			<Box className="main-content">
				<Box className="top-nav">
					<IconButton color="secondary" onClick={handleLogout}>
						<Logout onClick={handleLogout} />
					</IconButton>
					<IconButton color="secondary">
						<Settings />
					</IconButton>
					<IconButton color="secondary">
						<Notifications />
					</IconButton>
				</Box>

				{children}
			</Box>
		</Box>
	);
};

export default Layout;
