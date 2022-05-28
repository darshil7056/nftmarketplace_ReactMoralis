import React from 'react'
import './Home.css'

import Slider from './Slider'
import { Link } from 'react-router-dom'

export const Home = () => {
  
  return (
    <div className="homePage">
      <div className="homePageContainer">
        <div className="homeleftCard">
          <div className="leftsubCon">
            <h1>Discover digital assets</h1>
          </div>
          <div className="subCon">
            <span>
              Shared liquidity NFT market smart contract which is used by
              multiple websites to provide the users the best possible
              experience.
            </span>
            <Link to="explore">
              <button>View Market</button>
            </Link>
          </div>
        </div>

        <div className="homerightContainer">
          <Slider />
        </div>

        {/* <div className="imgCard">
            <img
              alt=""
              src="https://centaur-wp.s3.eu-central-1.amazonaws.com/designweek/prod/content/uploads/2021/03/18143417/artofcybersecurity_banking_1920x1080.jpg"
              className="homeImage"
            />
          </div>
          <div className="imgDetails">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwamBxqwDt-ZUgUL6W4IUhra4AmZbOMofdjg&usqp=CAU"
                alt=""
                className="rightImage"
              />
            </div>
            <div className="details">
              <span className="detailSpan1">HNY</span>
              <span className="detailSpan2">hola-kanola</span>
            </div>
          </div> */}
      </div>
    </div>
  )
}
