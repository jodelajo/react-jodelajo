import React from "react";
import styles from "./SinglePortfolio.module.css";
import PortfolioData from "../../data/portfolio.json";
import { useParams, useHistory } from "react-router-dom";

function SinglePortfolioScreen() {
  const history = useHistory();
  const { slug } = useParams();

  const singlePort = PortfolioData[slug - 1];
  const thisPort = parseInt(singlePort.id, 10);
  const nextPort = thisPort + 1;
  const prevPort = thisPort - 1;

  function prev() {
    history.push(`/singleportfolio/${prevPort}`);
  }

  function next() {
    history.push(`/singleportfolio/${nextPort}`);
  }

  return (
    <div className={styles["singlePort-container"]}>
      <h1>{singlePort.title}</h1>

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
              <a href={singlePort.website} target="_blank" rel="noreferrer">
                Website
              </a>
              <p>{singlePort.description}</p>
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
export default SinglePortfolioScreen;
