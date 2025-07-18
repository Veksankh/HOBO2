import React from "react";

function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#f9f7f3] text-black">
      <header className="w-full flex items-center justify-between p-4 border-b border-gray-300">
        <div className="text-2xl font-bold text-black">motif</div>
        <nav className="space-x-4">
          <button className="px-4 py-2 rounded-full bg-black text-white">Upload</button>
          <button className="px-4 py-2 rounded-full border border-black text-black">Login</button>
        </nav>
      </header>

      <section className="flex-1 w-full max-w-sm mt-10">
        <div className="aspect-[9/16] bg-white border border-gray-300 rounded-xl shadow-md flex items-center justify-center text-gray-500">
          Vertical Reel Placeholder
        </div>
        <div className="text-center mt-4 text-sm text-gray-500">
          Scroll to watch next →<br />
          Ad shown after every 5 clips
        </div>
      </section>

      <footer className="p-4 text-center text-sm text-gray-400">© 2025 Motif</footer>
    </main>
  );
}

export default App;
