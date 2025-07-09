import { useRouteError, Link } from "react-router-dom";
import "./ErrorBoundary.scss";

function ErrorBoundary() {
  const error = useRouteError();
  console.error("Route error:", error);

  return (
    <div className="errorBoundary">
      <div className="wrapper">
        <h1>Oops! Something went wrong</h1>
        <p>{error?.message || "An unexpected error occurred"}</p>
        {error?.response?.data?.message && (
          <p className="error-details">{error.response.data.message}</p>
        )}
        <div className="buttons">
          <button onClick={() => window.location.reload()}>Try Again</button>
          <Link to="/">
            <button>Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorBoundary; 