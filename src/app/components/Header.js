import img from "../../images/head.jpg";
const Header = () => {
  return (
    <div className="App-header">
      <img style={{ width: "25%" }} src={img} alt="Head" />

      <h1 className="text-lift text-dark ">MyTunes</h1>
      <p
        className="text-dark"
        style={{ fontSize: "18px", backgroundColor: "white", padding: "5px" }}
      >
        Apple iTunes WebApp
      </p>
    </div>
  );
};

export default Header;
