import FuzzyText from "../../components/404/FuzzyText";
import "./NotFound.css";

function NotFound() {
  return (
    <main className="not-found">
      <FuzzyText>404</FuzzyText>

      <h2>Page Not Found</h2>
      <p>Sorry, the page you're looking for doesn't exist.</p>

      <a href="/">Back to Home</a>
    </main>
  );
}

export default NotFound;
