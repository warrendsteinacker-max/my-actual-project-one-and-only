import React from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"


import ProtectedRoute from './comps/common/ProtectedRoute'

// Auth Pages
import NotFoundPage from './pages/Auth/NotFoundPage';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
 // Verify if this is in Auth or its own folder

// Document Pages
import DocumentDetailPage from './pages/documents/DocumentDetailPage';
import DocumentListPage from './pages/documents/DocumentListPage';

// Dashboard Pages
import DashboardPage from './pages/Dashboard/DashboardPage';

// Flashcards
import FlashcardListPage from './pages/Flashcards/FlashcardListPage'; // Match the folder name exactly
import FlashcardPage from './pages/Flashcards/FlashcardPage';

// Quizzes
import QuizTakePage from './pages/Quizzes/QuizTakePage';
import QuizResultPage from './pages/Quizzes/QuizResultPage';

// Profile
import ProfilePage from './pages/Profile/ProfilePage';

import './App.css'

const App = () => {
  const isAuthenticated = false
  const loading = false

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          
          <Route path="/documents/:id" element={<DocumentDetailPage />} />
          <Route path="/documents" element={<DocumentListPage />} />
          <Route path="/flashcards" element={<FlashcardListPage />} />
          <Route path="/documents/:id/flashcards" element={<FlashcardPage />} />
          <Route path="/quizzes/:quizId" element={<QuizTakePage />} />
          <Route path="/quizzes/:quizId/results" element={<QuizResultPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App