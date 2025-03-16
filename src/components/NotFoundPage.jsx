import { Link } from "react-router-dom";
import styles from "../comons/styles/base.module.scss";

function NotFoundPage() {
  return (
    <div className={styles.notFound}>
      <h1>404 - Page Not Found</h1>
      <p>It seems that you are lost on a road of life</p>
      <Link to="/">Go back to authentication</Link>
    </div>
  );
}

export default NotFoundPage;
