// src/pages/CoachBooking.tsx
import React, { useState } from 'react';
import {
  Box, Typography, Avatar, Button, List, ListItem, ListItemText,
  ListItemAvatar, Dialog, DialogTitle, DialogContent, DialogActions, ListItemIcon
} from '@mui/material';
import { AccessTime, Star, CalendarMonth, Feedback } from '@mui/icons-material';
import '../../styles/components/_coachBooking.scss';

interface Coach {
  id: number;
  name: string;
  expertise: string;
  rating: number;
  availableTimes: string[];
}

const coaches: Coach[] = [
  {
    id: 1,
    name: 'John Doe',
    expertise: 'Web Development',
    rating: 4.8,
    availableTimes: ['10:00 AM - 11:00 AM', '2:00 PM - 3:00 PM'],
  },
  {
    id: 2,
    name: 'Jane Smith',
    expertise: 'Data Science',
    rating: 4.9,
    availableTimes: ['9:00 AM - 10:00 AM', '3:00 PM - 4:00 PM'],
  },
  {
    id: 3,
    name: 'Alice Johnson',
    expertise: 'UI/UX Design',
    rating: 4.7,
    availableTimes: ['11:00 AM - 12:00 PM', '4:00 PM - 5:00 PM'],
  },
  {
    id: 4,
    name: 'Michael Brown',
    expertise: 'Cybersecurity',
    rating: 4.6,
    availableTimes: ['10:00 AM - 11:00 AM', '1:00 PM - 2:00 PM'],
  },
];

const CoachBooking = () => {
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);
  const [open, setOpen] = useState(false);

  const handleBookSession = (coach: Coach) => {
    setSelectedCoach(coach);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCoach(null);
  };

  return (
    <Box className="coach-booking-page" sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Book a Coaching Session
      </Typography>
      <List>
        {coaches.map((coach) => (
          <ListItem key={coach.id} className="coach-card">
            <ListItemAvatar>
              <Avatar>{coach.name.charAt(0)}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={coach.name}
              secondary={`${coach.expertise} • Rating: ${coach.rating}`}
            />
            <Button
              variant="contained"
              color="primary"
              startIcon={<CalendarMonth />}
              onClick={() => handleBookSession(coach)}
            >
              Book Session
            </Button>
          </ListItem>
        ))}
      </List>

      {/* Booking Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Book Session with {selectedCoach?.name}
        </DialogTitle>
        <DialogContent>
          <Typography variant="subtitle1">
            Expertise: {selectedCoach?.expertise}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Available Times:
          </Typography>
          <List>
            {selectedCoach?.availableTimes.map((time, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <AccessTime />
                </ListItemIcon>
                <ListItemText primary={time} />
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Confirm Booking
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CoachBooking;
