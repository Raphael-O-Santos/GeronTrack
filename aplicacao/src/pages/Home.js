// Styles
// import styles from "./Home.module.css";
// Components
import Header from "../components/Header";
import Bottom from "../components/Bottom";

const Home = () => {
  return (
    <div
      className="blocoSombra"
      style={{
        width: "100vw",
        height: "100vh",
        boxShadow: "inset 0 2em 0 #CAF0F8, inset 0 -2em 0 #CAF0F8",
        justifyContent: "space-between",
        overflowX: "hidden",
      }}
    >
      <Header />
      <h1>asd</h1>
      <Bottom />
    </div>
  );
};

export default Home;
