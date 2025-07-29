// src/pages/About.tsx
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <main>
        <h1>About This Website</h1>
      </main>
    </div>
  )
}

export default About
