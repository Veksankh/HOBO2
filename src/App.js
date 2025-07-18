import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UploadPage from './pages/UploadPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#f9f7f3] text-black">
        <header className="w-full flex items-center justify-between p-4 border-b border-gray-300">
          <div className="text-2xl font-bold lowercase">motif</div>
          <nav className="space-x-4">
            <Link to="/" className="px-4 py-2 hover:underline">Home</Link>
            <Link to="/upload" className="px-4 py-2 hover:underline">Upload</Link>
            <Link to="/dashboard" className="px-4 py-2 hover:underline">Dashboard</Link>
            <Link to="/login" className="px-4 py-2 hover:underline">Login</Link>
          </nav>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>

        <footer className="p-4 text-center text-sm text-gray-500">© 2025 Motif</footer>
      </div>
    </Router>
  );
}

export default App;

// src/pages/HomePage.js
import React from 'react';

const dummyClips = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  title: `Clip ${i + 1}`,
  thumbnail: '',
}));

export default function HomePage() {
  return (
    <div className="w-full max-w-md space-y-6">
      <h1 className="text-xl font-semibold">Home</h1>
      {dummyClips.map((clip) => (
        <div key={clip.id} className="aspect-[9/16] bg-white border border-gray-300 rounded-xl shadow-md flex items-center justify-center text-gray-500">
          {clip.title}
        </div>
      ))}
    </div>
  );
}

// src/pages/UploadPage.js
import React from 'react';

export default function UploadPage() {
  return (
    <div className="w-full max-w-md space-y-4">
      <h1 className="text-xl font-semibold">Upload Movie</h1>
      <div className="flex flex-col space-y-2">
        <input type="file" accept="video/*" className="" />
        <button className="px-4 py-2 bg-black text-white rounded-full">Upload & Split</button>
      </div>
    </div>
  );
}

// src/pages/LoginPage.js
import React from 'react';

export default function LoginPage() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <h1 className="text-xl font-semibold">Login</h1>
      <input type="text" placeholder="Username" className="w-full p-2 border border-gray-300 rounded" />
      <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded" />
      <button className="px-4 py-2 bg-black text-white rounded-full">Login</button>
    </div>
  );
}

// src/pages/DashboardPage.js
import React from 'react';

export default function DashboardPage() {
  return (
    <div className="w-full max-w-lg space-y-4">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="border border-gray-300 p-4 rounded">
        <p>Contributor Stats:</p>
        <ul className="list-disc list-inside">
          <li>Uploaded Clips: 0</li>
          <li>Views: 0</li>
          <li>Earnings: $0.00</li>
        </ul>
      </div>
    </div>
}
