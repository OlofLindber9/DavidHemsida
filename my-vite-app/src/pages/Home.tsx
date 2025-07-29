// src/pages/Home.tsx
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <main>
        <h1>Welcome to the Home Page</h1>
      </main>
    </div>
  )
}

export default Home
