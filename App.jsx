import React from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component {
  render() {
    return <div>
					 		<h1>{this.props.children}</h1>
				   </div>
  }
}

ReactDOM.render(
	<div>
		<Card>My Card1</Card>	
		<Card>My Card2</Card>
	</div>
	, document.getElementById('app'))	;