import { useEffect } from "react";
import { supabase } from "./supbaseClient";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check for existing session
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) navigate("#");  // Redirect to /# if session exists
    };

    checkSession();

    // Auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) navigate("#");  // Redirect to /# after sign in
    });

    return () => subscription?.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-800">
      <button
        onClick={() => supabase.auth.signInWithOAuth({ 
          provider: "google", 
          options: {
            // redirectTo: window.location.origin + "/#",
          scopes: 'https://www.googleapis.com/auth/userinfo.profile'
          }
        })}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
      >
        Sign in with Google to continue
      </button>
    </div>
  );
}