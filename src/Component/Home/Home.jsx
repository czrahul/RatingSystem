import axios from "axios"
import React, {  useEffect, useState } from "react"
import Topnav from "../topnav/Topnav"
import "./home.css"

const Home = () => {

  const [arrayData, setmethod] = useState([])
	useEffect(() => {
		axios.get("http://localhost:4000").then(function(response) {
			setmethod(response.data);
		})
	}, [])


	return (
    <div>
        <Topnav/>
        <div className="pldetail">
      {arrayData.map((ques, i) => 
    //   s = String({i}+1)+".jpg";
      // <img src={i+1}+".jpg" />
      <div className="pldetails">
        <label>Player Name: </label>
        <span>{ques.name}</span> <br/>
        <label>Experience: </label>
        {ques.experience}<br/>
        <label>Team: </label>
        <span> {ques.team}</span><br/>
        <label>Rating: </label>
        <span> {ques.avg_rating}</span>
        
        <div><br/><hr/></div>
      </div>
      )}
      </div>

    </div>
    )
}

export default Home;