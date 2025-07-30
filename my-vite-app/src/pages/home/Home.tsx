import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <nav className="home-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <main>
        <h1>Welcome to the Home Page</h1>
      </main>
    </div>
  )
}

export default Home
