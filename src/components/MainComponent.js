import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import {Navbar,NavbarBrand} from 'reactstrap';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      selectedDish : null
    };  
  }

  onDishSelect(dishId){
    this.setState({selectedDish : dishId});
}

DishRender(dish){
  if(dish!=null){
    return  <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} 
    />;
  }else return <div />;
}

  render(){
    return (
      <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes}
      onClick={(dishId) => this.onDishSelect(dishId)}
      />
       {this.DishRender(this.state.selectedDish)}
      </div>
    );
  }
  
}

export default Main;
