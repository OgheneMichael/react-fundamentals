var React = require("react");

class Results extends React.Component {
	render() {
		console.log(this.props);

		return (
			<div>
				<p>Results!</p>
			</div>
		);
	}
}

module.exports = Results;
