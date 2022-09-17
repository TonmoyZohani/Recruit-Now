import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>recruitNow app</h1>
          <p>
            Lorem ipsum dolor sit amet. Qui internos quia est dicta incidunt non
            assumenda rerum ea consectetur neque sit quod dolores eum velit
            fuga. A consectetur animi ut nemo ipsa est quam magnam.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login or Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
