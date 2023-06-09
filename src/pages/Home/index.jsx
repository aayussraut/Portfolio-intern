import React from "react";
import image1 from "../../assets/home.webp";
import Style from "./Home.module.css";
const Home = () => {
  return (
    <div id="Home" className={Style.homePage}>
      <div className={Style.intro}>
        <span className={Style.homeHeader1}>
          Hello I'm
          <br /> <span className={Style.headerSpan1}>Aayush Raut</span>
        </span>
        <h4 className={Style.homeHeader4}>
          I'm a<span className={Style.headerSpan4}> Software Engineer</span>
        </h4>
        <p className={Style.homeParagraph}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
          repellat voluptas nisi architecto quaerat quo animi, dolorem
          voluptates quis, reiciendis obcaecati totam iusto nostrum tenetur
          recusandae. Quia aperiam tenetur iste.
        </p>
      </div>
      <div className={Style.imgDiv}>
        <img className={Style.homeimg} src={image1} />
      </div>
    </div>
  );
};

export default Home;
