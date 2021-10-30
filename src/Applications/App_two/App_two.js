import React, { useState } from "react";
import "./App_two.css";
import axios from "axios";

function App_two() {
  const [data, setData] = useState({});
  const [number, setNumber] = useState();

  let getData = (e) => {
    e.preventDefault();
    var options = {
      method: "GET",
      url: `https://api-nba-v1.p.rapidapi.com/games/gameId/${number}`,
      headers: {
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": "Vsq8AE020omshJsJ1wRuHnpWiHCwp1dmhT6jsnKvVksdMAjNKJ",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        let fullName = response.data.api.games[0].vTeam.fullName;
        let nickName = response.data.api.games[0].vTeam.nickName;
        let shortName = response.data.api.games[0].vTeam.shortName;
        let logo = response.data.api.games[0].vTeam.logo;
        setData({
          fullName: fullName,
          nickName: nickName,
          shortName: shortName,
          logo: logo,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="apps">
      <form onSubmit={getData}>
        <p className="gameid">type game id number :</p>
        <input
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
      </form>
      <div className="movies">
        <div className="movie">
          <img alt='Image' src={data.logo} />
          <h3>Full Name: {data.fullName}</h3>
          <h3>Nick Name: {data.nickName}</h3>
          <h3>Short Name: {data.shortName}</h3>
        </div>
      </div>
    </div>
  );
}

export default App_two;
