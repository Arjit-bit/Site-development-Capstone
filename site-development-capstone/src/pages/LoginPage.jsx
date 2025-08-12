import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in:", email, password);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Admin Login</h2>
        <p style={styles.subtitle}>Sign in to manage the admin panel</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Username/Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <div style={styles.row}>
            <label style={styles.remember}>
              <input type="checkbox" style={{ marginRight: "5px" }} />
              Remember Me
            </label>
            <Link to="/forgot-password" style={styles.link}>
              Forgot Password?
            </Link>
          </div>

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
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
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
    fontSize: "0.85rem",
  },
  remember: {
    color: "#ccc",
    display: "flex",
    alignItems: "center",
  },
  link: {
    color: "#339af0",
    textDecoration: "none",
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
};

export default LoginPage;
