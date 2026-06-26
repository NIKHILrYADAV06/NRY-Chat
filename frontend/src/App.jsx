
import { ThemeProvider } from "./context/ThemeContext";
import { Button } from '@heroui/react';
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { Route } from "react-router";
import ChatPage from "./pages/ChatPage";
import AuthPage from "./pages/AuthPage";
import { useAuth } from "@clerk/react";

function App() {
  const { isSignedIn, isLoaded } = useAuth();
  
  return (
    <>
     <ThemeProvider>
      <Routes>
         <Route path="/" element={isSignedIn ? <ChatPage /> : <Navigate to={"/auth"} replace />} />
        <Route
            path="/auth"
            element={!isSignedIn ? <AuthPage /> : <Navigate to={"/"} replace />}
          />
      </Routes>
     </ThemeProvider>
    </>
  )
}

export default App
