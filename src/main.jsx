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

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import SignIn from './SignIn'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/app",
    element: <App />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)