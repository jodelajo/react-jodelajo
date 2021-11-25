import React, { useEffect, useState, useContext } from "react";
import styles from "./SinglePortfolio.module.css";
import stringToSlug from "../../helpers/stringToSlug";
import { PortfolioContext } from '../../context/PortfolioContext'
import { useParams, useHistory } from "react-router-dom";
import Characteristics from "../../components/characteristics/Characteristics";
import { IoLogoGithub } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";


function SinglePortfolio() {
  const { portData } = useContext(PortfolioContext)
  const [arrOfCats, setArrOfCats] = useState([]);
  const history = useHistory();
  const { slug } = useParams();
   
  const singlePort = portData && portData.find((port)=> {
    return stringToSlug(port.title) === slug
  });

  const nextId = parseInt(singlePort && singlePort.id) + 1
  const nextPort = portData && portData.find((port) => {
    return parseInt(port.id) === nextId
  })
  const prevId = parseInt(singlePort && singlePort.id) - 1
  const prevPort = portData && portData.find((port) => {
    return (parseInt(port.id) === prevId)
  })


  function cat() {
    setArrOfCats(Object.entries(singlePort.category));
  }

  useEffect(() => {
    cat();
    // eslint-disable-next-line
  }, [singlePort]);

  const list = [];
  arrOfCats.forEach((element, index) => {
    if (element[1])
      list.push(
        <li key={index}>
          {" "}
          <span className={styles["dot"]}>-</span> {element}
        </li>
      );
  });

  function prev() {
    history.push(`/singleportfolio/${stringToSlug(prevPort.title)}`);
  }

  function next() {
    history.push(`/singleportfolio/${stringToSlug(nextPort.title)}`);
  }

  return (
    <div className={styles["singlePort-container"]}>
      <div className={styles["title-web"]}>
        <h1>{singlePort && singlePort.title}</h1>
      </div>
      <div className={styles["mobile-buttons"]}>
        <button
          className={styles["arrow-button"]}
          type="button"
          disabled={prevPort === undefined}
          onClick={prev}
        >
          ←
        </button>
        <button
          className={styles["arrow-button"]}
          type="button"
          disabled={nextPort === undefined}
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
            disabled={prevPort === undefined}
            onClick={prev}
          >
            ←
          </button>
        </div>
        <div className={styles["port-wrapper"]}>
          <div className={styles["port"]}>
           {singlePort.image ? <img
              src={singlePort.image}
              alt={singlePort.title}
              className={styles["single-img"]}
            /> :
            <div className={styles["single-img"]}><singlePort.code /></div>}
            <div className={styles["right"]}>
              <div className={styles["title-mob"]}>
                <h1>{singlePort.title}</h1>
              </div>
              <div className={styles["website"]}>
                {singlePort.website && (
                  <a href={singlePort.website} target="_blank" rel="noreferrer">
                    <CgWebsite /> Ga naar website
                  </a>
                )}
                {singlePort.github && (
                  <a href={singlePort.github} target="_blank" rel="noreferrer">
                    <IoLogoGithub /> Ga naar github
                  </a>
                )}
              </div>
              <div className={styles["list"]}>{list}</div>

              <p>{singlePort.description}</p>
              {singlePort.kenmerken && <><span>Kenmerken</span>
              <span className={styles.char}>
                {" "}
                <Characteristics singlePort={singlePort} />
              </span></>}
            </div>
          </div>
        </div>

        <div className={styles["web-buttons"]}>
          <button
            className={styles["arrow-button"]}
            type="button"
            disabled={nextPort === undefined}
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
