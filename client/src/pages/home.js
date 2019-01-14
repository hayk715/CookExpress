import React, { Component } from "react";
import Food from "../components/Food";
import Row from "../components/Row";
import Col from "../components/Col";
import Search from "../components/Search";
import {ButtonToolbar, Button} from "react-bootstrap";
import API from "../utils/API";
import { RecipeList, RecipeListItem } from "../components/RecipeList";
import Navbar from "../components/Navbar";
import { Container } from "../components/Grid";
import "./home.css";



class Home extends Component {
    
    state = {
        recipes: [],
        recipeSearch: ""
    };
    
    HandleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    
    HandleFormSubmit = event => {
        event.preventDefault();
        API.getRecipes(this.state.recipeSearch)
        .then((res) => {
            console.log(res)
            console.log('hit')
            this.setState({ recipes: res.data.results })
        })
        .catch(err => console.log(err));
}
    
    
    
    render() {
        console.log(this.state.recipes);
        return (
            <div>
                <Food className="backgroundimg" backgroundImage="https://iili.io/HK8Hx.jpg">
                    <div className="wholething">
                        <div className='headings text-center'>
                            <h1>Cook Express</h1>
                            <h2>What's Cookin</h2>
                        </div>
        
                        <div className="search">
                            <Search 
                                name="recipeSearch"
                                placeholder="Search For a Recipe"
                                value={this.state.recipeSearch}
                                onChange={this.HandleInputChange}
                            />
                            <ButtonToolbar>
                                <Button 
                                onClick={this.HandleFormSubmit}
                                bsStyle="primary" >Search</Button>
                            </ButtonToolbar>
                        </div>
                    </div>
                <Row>
            <Col size="xs-12">
              {!this.state.recipes.length ? (
                <p onClick={this.handleClick}className="text-center">Search for recipe</p>
              ) : (
                <RecipeList>
                  {this.state.recipes.map(recipe => {
                    return (
                      <RecipeListItem
                        title={recipe.title}
                        id={recipe.id}
                        key={recipe.title + recipe.id}
                        image={recipe.image}
                        
                      />
                    );
                  })}
                </RecipeList>
              )}
            </Col>
          </Row>
            </Food>
        
        </div>
        )
    }
    
    

};

export default Home;