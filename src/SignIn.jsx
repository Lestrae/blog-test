import { useEffect } from "react";
import { supabase } from "./supbaseClient";
import { useNavigate } from "react-router-dom";

const validateSession = (session) => {
  if (!session) return false;
  const currentTime = Math.floor(Date.now() / 1000);
  return session.expires_at > currentTime;
};

export default function SignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (session && validateSession(session)) {
        navigate("/app");
      }
    };
    
    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session && validateSession(session)) {
        navigate("/app");
      }
    });

    return () => subscription?.unsubscribe();
  }, [navigate]);

  // Handle GitHub Pages subpath in redirect URL
  const getRedirectUrl = () => {
    const baseUrl = window.location.href.replace(/\/signin.*$/, '');
    return `${baseUrl}/app`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-800">
      <button
        onClick={() => supabase.auth.signInWithOAuth({ 
          provider: "google", 
          options: {
            redirectTo: getRedirectUrl(),
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