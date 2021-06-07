import React from "react"
import styles from "./SinglePortfolio.module.css"
import PortfolioData from "../../data/portfolio.json"
import { useParams } from "react-router-dom";


function SinglePortfolioScreen() {
  const { slug } = useParams()
  const singlePort = PortfolioData[slug-1]

console.log(singlePort.category);





    return <div className={styles["singlePort-wrapper"]}>

              <h2>{singlePort.title}</h2>
              <div className={styles["port"]}>
              <img src={singlePort.image} alt={singlePort.title} 
              className={styles["single-img"]}
              />
              <p></p>
              <a href={singlePort.website}target="_blank" rel="noreferrer">Website</a>
              <p>{singlePort.description}</p>
              </div>
            

            

           
    </div>
}
export default SinglePortfolioScreen