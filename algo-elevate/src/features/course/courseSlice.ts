import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Instructor {
  name: string;
  title: string;
  avatar: string;
}

export interface Module {
  name: string;
  duration: string;
  status: 'completed' | 'in-progress' | 'not-started';
}

export interface CourseState {
  currentCourseId: string | null;
  currentCourseName: string | null;
  instructor: Instructor | null;
  progress: number;
  modules: Module[];
}

const initialState: CourseState = {
  currentCourseId: null,
  currentCourseName: null,
  instructor: null,
  progress: 0,
  modules: [],
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setCurrentCourse: (state, action: PayloadAction<CourseState>) => {
      return { ...state, ...action.payload };
    },
    clearCurrentCourse: (state) => {
      return initialState;
    },
    updateProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
    },
    updateModuleStatus: (state, action: PayloadAction<{ index: number; status: Module['status'] }>) => {
      const { index, status } = action.payload;
      if (state.modules[index]) {
        state.modules[index].status = status;
      }
    },
  },
});

export const { setCurrentCourse, clearCurrentCourse, updateProgress, updateModuleStatus } = courseSlice.actions;

export default courseSlice.reducer;

export const selectCurrentCourse = (state: { course: CourseState }) => state.course;