import "./Home.css";
import "./background.css";
import HomeButton from "../../components/homeButton/homeButton";

function Home() {
  return (
    <div className="home-container">
      <div className="main-layout">
        <div className="right-sidebar">
          <HomeButton name="about me"/>
          <HomeButton name="contact"/>
          <HomeButton name="tour"/>
          <HomeButton name="song list"/>
        </div>
      </div>

      <div className="background">
        <span className="ball"></span>
        <span className="ball"></span>
        <span className="ball"></span>
        <span className="ball"></span>
        <span className="ball"></span>
        <span className="ball"></span>
      </div>
    </div>
  );
}

export default Home;
