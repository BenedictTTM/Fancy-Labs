import { Routes, Route, Navigate } from 'react-router-dom';
import About from '../Pages/About';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Members from '../Pages/Members';
import Register from '../Pages/Register';
import { auth } from '../Components/firebase'; // Adjust path as needed
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';


function App() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return ;
  }

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      
      {/* Protected routes */}
      <Route 
        path="/home" 
        element={user ? <Home /> : <Navigate to="/login" replace />} 
      />
      <Route 
        path="/about" 
        element={user ? <About /> : <Navigate to="/login" replace />} 
      />
            <Route 
        path="/members" 
        element={user ? <Members /> : <Navigate to="/login" replace />} 
      />
      
      {/* 404 route */}
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
