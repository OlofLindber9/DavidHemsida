import "./About.css";
import { useNavigate } from "react-router-dom";
import "../../components/homeButton/homeButton.css";

function About() {
  const navigate = useNavigate();
  return (
    <div className="about-container">
      <div
        className="holographic-card top-left-home-button"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3AAFA9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </div>
      <div className="about-content">
        <h1>Vem är jag?</h1>
        <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus vel eros quis pulvinar. Aliquam erat volutpat. Duis ac massa id nisi efficitur tincidunt at vitae neque. Praesent dapibus non nisl in eleifend. Morbi interdum ante sit amet nunc dictum iaculis. Etiam accumsan dui id eleifend volutpat. Etiam cursus finibus ligula sit amet vestibulum. Quisque rutrum euismod orci, sed porta enim rhoncus non. Nam ac augue mollis, finibus felis euismod, tincidunt felis. Mauris faucibus nulla quis dictum iaculis.
        </p>
      </div>

      <div className="about-background">
        <span className="ball"></span>
        <span className="ball"></span>
        <span className="ball"></span>
      </div>
    </div>
  );
}

export default About;
