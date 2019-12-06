import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar";


export default class Card extends Component {
  constructor() {
    super();

    this.state = {
      beer: {}
    };
  }
  componentDidMount() {
    if (this.props.beerID) {
      axios.get("https://ih-beers-api2.herokuapp.com/beers/" + this.props.beerID).then(beer => {
        console.log(beer);
        this.setState({
          ...this.state,
          beer: beer.data
        });
      });
    } else {
      axios.get("https://ih-beers-api2.herokuapp.com/beers/random").then(beer => {
        console.log(beer);
        this.setState({
          ...this.state,
          beer: beer.data
        });
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <article className='d-flex flex-column align-items-center'>
          <div className='card  p-4'>
            <img src={this.state.beer.image_url} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>{this.state.beer.name}</h5>
              <h6 className='d-inline'>{this.state.beer.attenuation_level}</h6>
              <p className='blockquote-footer'>{this.state.beer.tagline}</p>
              <p className='d-inline'>{this.state.beer.first_brewed}</p>
              <p className='card-text'>{this.state.beer.description}</p>
              <p className='card-text'>
                <small className='text-muted'>{this.state.beer.contributed_by}</small>
              </p>
            </div>
          </div>
        </article>
      </React.Fragment>
    );
  }
}
