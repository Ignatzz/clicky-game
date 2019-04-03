import React, { Component } from 'react';
import Card from '../Card';
import images from "../../images.json";
import "./style.css";
class GameZone extends Component {
	state = {
		currentScore: 0,
		highScore: 0,
		images,
		message: "Click on any picture to start the game!"
    };
    handleClick = (id, clicked) => {
		const imageOrder = this.state.images;
		if (clicked) {
			imageOrder.forEach((image, index) => {
				imageOrder[index].clicked = false;
			});
			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				message: "Incorrect!",
				currentScore: 0
			})
		}
		else {
			imageOrder.forEach((image, index) => {
				if (id === image.id) {
					imageOrder[index].clicked = true;
				}
			});
			const { highScore, currentScore } = this.state;
			const newScore = currentScore + 1;
			const newHighScore = newScore > highScore ? newScore : highScore;
			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				message: "Correct!",
				currentScore: newScore,
				highScore: newHighScore,
			})
		}
	};

	render() {
		return (
			<div className="container-fluid mainCardContainer">
			<div className="infoDisplay text-center">
						<p>{this.state.message}</p>
					</div>
					<div className="scoreDisplay text-center">
						<p>Current Score: {this.state.currentScore}     --------------        High Score: {this.state.highScore}</p>
					</div>
				<div className="container">
					
					<div className="row">
					{this.state.images.map(image => (
						<Card
							key={image.id}
							id={image.id}
							clicked={image.clicked}
							image={image.image}
							handleClick={this.handleClick}
							/>
					))}
					</div>
				</div>
			</div>
		);
	}
};

export default GameZone;