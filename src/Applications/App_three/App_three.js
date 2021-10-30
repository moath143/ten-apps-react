import React, {useEffect, useState} from "react";
import '../../../node_modules/font-awesome/css/font-awesome.css'
import "./App_three.css";
import axios from "axios";
import Rating from 'react-rating'


function App_three() {
    const urlData = `https://api.rawg.io/api/games?key=b792bd57b4e84e2abbfe4d48510a310b`;
    const[listGames, setListGames] = useState([])

    useEffect(() => {
        games()
    })


    function games() {
        axios.get(urlData).then((res) => {
            let data = res.data.results
            setListGames(data)
        }).catch((err) => {console.log(err);})
    }

    let dataView = listGames.map((el, index) => {
        return (
          <div key={index} className="game_card">
            <div className="photo">
              <img src={el.background_image} alt="" />
            </div>
            <h3>name: {el.name}</h3>
            <h3>rating: {el.rating} </h3>
            <Rating
              start={0}
              stop={6}
              initialRating={el.rating}
              readonly={true}
              emptySymbol={[
                "fa fa-star-o fa-2x low",
                "fa fa-star-o fa-2x low",
                "fa fa-star-o fa-2x medium",
                "fa fa-star-o fa-2x medium",
                "fa fa-star-o fa-2x high",
                "fa fa-star-o fa-2x high",
              ]}
              fullSymbol={[
                "fa fa-star fa-2x low",
                "fa fa-star fa-2x low",
                "fa fa-star fa-2x medium",
                "fa fa-star fa-2x medium",
                "fa fa-star fa-2x high",
                "fa fa-star fa-2x high",
              ]}
            />
          </div>
        );
    })
  return (
    <div className="app_three">
      <div className="games">
        {dataView}
        {/* <div className="game_card">
                    <div className="photo">
                        <img src="http://placehold.it/200/200" alt="" />
                    </div>
                    <h3>name: portal 2</h3>
                    <h3>rating: 4.74 </h3>
                </div>
                <div className="game_card">
                    <div className="photo">
                        <img src="http://placehold.it/200/200" alt="" />
                    </div>
                    <h3>name: portal 2</h3>
                    <h3>rating: 4.74 </h3>
                </div>
                <div className="game_card">
                    <div className="photo">
                        <img src="http://placehold.it/200/200" alt="" />
                    </div>
                    <h3>name: portal 2</h3>
                    <h3>rating: 4.74 </h3>
                </div>
                <div className="game_card">
                    <div className="photo">
                        <img src="http://placehold.it/200/200" alt="" />
                    </div>
                    <h3>name: portal 2</h3>
                    <h3>rating: 4.74 </h3>
                </div>
                <div className="game_card">
                    <div className="photo">
                        <img src="http://placehold.it/200/200" alt="" />
                    </div>
                    <h3>name: portal 2</h3>
                    <h3>rating: 4.74 </h3>
                </div>
                <div className="game_card">
                    <div className="photo">
                        <img src="http://placehold.it/200/200" alt="" />
                    </div>
                    <h3>name: portal 2</h3>
                    <h3>rating: 4.74 </h3>
                </div> */}
      </div>
    </div>
  );
}

export default App_three;
