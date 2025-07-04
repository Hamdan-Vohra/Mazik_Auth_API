export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Password API Server</h1>
      <p>✅ Deployment is working!</p>
      <p>Available endpoints:</p>
      <ul>
        <li>
          <code>/api/encrypt</code> - Hash a password
        </li>
        <li>
          <code>/api/verify</code> - Verify a password
        </li>
      </ul>
    </div>
  );
}
