import  { useEffect, useState } from 'react';
import TypedAnimation from '../Pages/TypeAnimation';
import Home from '../Pages/Home';

function App() {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHome(true);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <div>
      {showHome ? <Home /> : <TypedAnimation />}
    </div>
  );
}

export default App;
