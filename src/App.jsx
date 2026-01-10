import React from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"
import LoginPage from './pages/Auth/LoginPage'
import RegisterPage from './pages/Auth/RegisterPage'
import ProtectedRoute from './comps/common/ProtectedRoute'

// Auth Pages
import NotFoundPage from './pages/Auth/NotFoundPage';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import ProfilePage from './pages/Auth/ProfilePage'; // Verify if this is in Auth or its own folder

// Document Pages
import DocumentDetailPage from './pages/documents/DocumentDetailPage';
import DocumentListPage from './pages/documents/DocumentListPage';

// Dashboard Pages
import DashboardPage from './pages/Dashboard/DashboardPage';

// Other Pages (Verify these locations in your sidebar)
import FlashcardsListPage from './pages/documents/FlashcardsListPage'; 
import FlashcardPage from './pages/documents/FlashcardPage';
import QuizTakePage from './pages/documents/QuizTakePage';
import QuizResultPage from './pages/documents/QuizResultPage';

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
          <Route path="/flashcards" element={<FlashcardsListPage />} />
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