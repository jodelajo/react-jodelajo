import React, { useEffect, useState } from "react";
import styles from "./SinglePortfolio.module.css";
import PortfolioData from "../../data/portfolio.json";
import { useParams, useHistory } from "react-router-dom";
import Characteristics from '../characteristics/Characteristics'

function SinglePortfolio() {
  // const [categories, setCategories] = useState([]);
  const [arrOfCats, setArrOfCats] = useState([]);
  const history = useHistory();
  const { slug } = useParams();

  const singlePort = PortfolioData[slug - 1];
  const thisPort = parseInt(singlePort.id, 10);
  const nextPort = thisPort + 1;
  const prevPort = thisPort - 1;


  console.log(singlePort);


  function cat() {
    // setCategories(singlePort.category);
    setArrOfCats(Object.entries(singlePort.category));
  }

  useEffect(() => {
    cat();
    // eslint-disable-next-line
  }, [singlePort]);



  const list = [];
  arrOfCats.forEach((element, index) => {
    if (element[1]) list.push(<li key={index}> <span className={styles["dot"]}>-</span> {element}</li>);
  });


  function prev() {
    history.push(`/singleportfolio/${prevPort}`);
  }

  function next() {
    history.push(`/singleportfolio/${nextPort}`);
  }

  return (
    <div className={styles["singlePort-container"]}>
      <div className={styles["title-web"]}>
        <h1>{singlePort.title}</h1>
      </div>
      <div className={styles["mobile-buttons"]}>
        <button
          className={styles["arrow-button"]}
          type="button"
          disabled={prevPort < 1}
          onClick={prev}
        >
          ←
        </button>
        <button
          className={styles["arrow-button"]}
          type="button"
          disabled={thisPort >= PortfolioData.length}
          onClick={next}
        >
          →
        </button>
      </div>
      <div className={styles["singlePort-wrapper"]}>
        <div className={styles["web-buttons"]}>
          <button
            className={styles["arrow-button"]}
            type="button"
            disabled={prevPort < 1}
            onClick={prev}
          >
            ←
          </button>
        </div>
        <div className={styles["port-wrapper"]}>
          <div className={styles["port"]}>
            <img
              src={singlePort.image}
              alt={singlePort.title}
              className={styles["single-img"]}
            />
            <div className={styles["right"]}>
              <div className={styles["title-mob"]}>
                <h1>{singlePort.title}</h1>
              </div>
              <div className={styles["website"]}>
                <a href={singlePort.website} target="_blank" rel="noreferrer">
                  Ga naar website →
                </a>
              </div>
              <div className={styles["list"]}>{list}</div>

              <p>{singlePort.description}</p>
            
            </div>
            <div>
            <Characteristics  singlePort={singlePort}/>
            </div>
          </div>
        </div>

        <div className={styles["web-buttons"]}>
          <button
            className={styles["arrow-button"]}
            type="button"
            disabled={thisPort >= PortfolioData.length}
            onClick={next}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
export default SinglePortfolio;
