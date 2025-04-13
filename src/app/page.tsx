// src/app/page.tsx
import Navbar from './Components/Navbar';
export default function HomePage() {
  return (
    <>
    <Navbar/>
    <main className="flex min-h-screen items-center justify-center bg-yellow-500 p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-10">Welcome to WinXtreme 🚀</h1>
        <p className="text-lg text-gray-700">Something amazing is under construction ! Be Patience</p>
      </div>
    </main>
    </>
  );
}
