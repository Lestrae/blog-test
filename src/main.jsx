// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";

// import { router } from "./router.jsx";
// import { RouterProvider } from "react-router-dom";
// import { AuthContextProvider } from "./context/AuthContext.jsx";
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// const queryClient = new QueryClient()
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <QueryClientProvider client={queryClient}>
//     <>
//       <h1 className="text-center text-3xl pt-4">Welcome</h1>
//       <AuthContextProvider>
//         <RouterProvider router={router} />
//       </AuthContextProvider>
//     </>
//     </QueryClientProvider>
//   </StrictMode>

// );

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HashRouter, Route, Routes } from 'react-router-dom';  // Use HashRouter instead of BrowserRouter
import './index.css';
import App from './App';
import SignIn from './SignIn';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  </StrictMode>
);