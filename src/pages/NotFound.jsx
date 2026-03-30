import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-brand-dark mb-4">404</h1>
      <p className="text-xl text-brand-muted mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="text-brand-coral underline text-lg">
        Go back home
      </Link>
    </div>
  );
}
