import React from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"
import LoginPage from './pages/Auth/LoginPage'
import RegisterPage from './pages/Auth/RegisterPage'
import NotFoundPage from './pages/Auth/NotFoundPage'
import DocumentListPage from './pages/Auth/DocumentListPage';
import DocumentDetailPage from './pages/Auth/DocumentDetailPage';
import FlashcardsListPage from './pages/Auth/FlashcardsListPage';
import FlashcardPage from './pages/Auth/FlashcardPage';
import QuizTakePage from './pages/Auth/QuizTakePage';
import QuizResultPage from './pages/Auth/QuizResultPage';
import ProfilePage from './pages/Auth/ProfilePage';
import DashboardPage from './pages/Auth/DashboardPage'
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
          <Route path="/documents" element={<DocumentListPage />} />
          <Route path="/documents/:id" element={<DocumentDetailPage />} />
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