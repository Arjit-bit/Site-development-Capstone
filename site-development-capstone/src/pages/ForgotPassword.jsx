import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset link sent to:", email);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Forgot Password</h2>
        <p style={styles.subtitle}>
          Enter your email to receive a password reset link.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Send Reset Link
          </button>
        </form>
        <p style={{ marginTop: "1rem" }}>
          <Link to="/" style={styles.link}>
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0d0f14",
  },
  formContainer: {
    backgroundColor: "#0d0f14",
    padding: "2rem",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  title: {
    marginBottom: "0.5rem",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    marginBottom: "1.5rem",
    fontSize: "0.9rem",
    color: "#aaa",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "1rem",
    backgroundColor: "#1e222b",
    border: "1px solid #333",
    borderRadius: "6px",
    color: "#fff",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "6px",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
  link: {
    color: "#339af0",
    textDecoration: "none",
  },
};

export default ForgotPassword;
