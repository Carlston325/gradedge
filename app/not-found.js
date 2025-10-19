// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">Looks like this page doesn’t exist.</p>
      <a href="/" className="text-blue-500 underline">
        Go Home
      </a>
    </div>
  );
}
