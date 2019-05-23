import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.mhttps://api.openweathermap.org/data/2.5/forecast?q=Yogyakarta,id&mode=json&appid=15f536910130c2be30421e15e69171c4&units=metric")
    .then(list => list.json())
    .then(parsedJSON => parsedJSON.list.map(data => (
      {
        //id: `${data.id.main}`,  
        temp: `${data.main.temp}`,
        temp_min: `${data.main.temp_min}`,
        temp_max: `${data.main.temp_max}`,
      }
    )))
    .then(items => this.setState({
      items,
      isLoaded: false
    }))
    .catch(error => console.log('parsing failed', error))
  }

  render() {
    const {items} = this.state;
    return (
      <div className="boxWhite">
        {
          items.length > 0 ? items.map(item => {
            const {temp, temp_min, temp_max} = item;
            return (
                 <div className="ctr">
                  {temp} {temp_max}<br />
                  {temp_min}
                </div>
            );
          }) : null
        }
      </div>
    );
  }
}

export default Home;