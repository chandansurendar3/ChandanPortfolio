// src/components/Header.js
// import React from 'react';
// import { Link } from 'react-router-dom';


// const Header = () => {
//   return (
//     <header className="bg-gray-800 text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-3xl font-bold">Chandan</h1>
//         <nav>
//           <Link to="/" className='px-4'>Home</Link>
//           <Link to="/about" className="px-4">About</Link>
//           <Link to="/#projects" className="px-4">Projects</Link>
//           <Link to="/#footer" className="px-4">Contact</Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleNavClick = (id) => {
    navigate(`/#${id}`);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Chandan</h1>
        <nav>
          <Link to="/" className='px-4'>Home</Link>
          <Link to="/about" className="px-4">About</Link>
          <span className="px-4 cursor-pointer" onClick={() => handleNavClick('projects')}>Projects</span>
          <span className="px-4 cursor-pointer" onClick={() => handleNavClick('footer')}>Contact</span>
        </nav>
      </div>
    </header>
  );
}

export default Header;

