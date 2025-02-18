import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Homepage from './routes/Homepage.jsx';
import PostListPage from './routes/PostListPage.jsx';
import SinglePostPage from './routes/SinglePostPage.jsx';
import Write from './routes/Write.jsx';
import LoginPage from './routes/LoginPage.jsx';
import RegisterPage from './routes/RegisterPage.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css';
import App from './App.jsx';
import { ClerkProvider } from '@clerk/clerk-react';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Create a QueryClient instance for React Query
const queryClient = new QueryClient();

// Retrieve Clerk Publishable Key from environment variables
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Ensure the Clerk Publishable Key is available
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

// Define routes for the React Router
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/posts", element: <PostListPage /> },
      { path: "/:slug", element: <SinglePostPage /> },
      { path: "/write", element: <Write /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
]);

// Render the React app with ClerkProvider and React Query
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <QueryClientProvider client={queryClient}> 
        <RouterProvider router={router} />
        <ToastContainer position="bottom-right" />
      </QueryClientProvider>
    </ClerkProvider>
  </StrictMode>
);