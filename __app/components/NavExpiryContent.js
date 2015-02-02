/** @jsx React.DOM */
var React = require('react/addons');
var DateBtnGroup = require('./DateBtnGroup');

var formatAMPM = function (date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
};

var formatDate = function(date) {
	return [date.getMonth() + 1, date.getDate(), date.getFullYear().toString().slice(2)].join('/');
};

var NavExpiryContent = React.createClass({

	render: function() {
		var caption, endTime, endDate;
		var date = new Date;
		var end = new Date;
		end.setHours(date.getHours() + parseInt(this.props.expiry, 10));
		var startTime = formatAMPM(date);
		var startDate = formatDate(date);
		var endTime = formatAMPM(end);
		var endDate = formatDate(end);
		
		switch(this.props.expiry) {
			case '1 hour':
				caption = 'Soon';
				break;
			case '7 hours':
				caption = 'Later';
				break;
			case '12 hours':
				caption = 'Half-day';
				break;
			case '24 hours':
				caption = 'Tomorrow';
				break;
		}

		return (
			<div className="content">
        <p className="large">{this.props.expiry}</p>
        <p className="large">auto-deletion</p>
        <div className="text-center">
        <div className="timer now">
          <p className="small bold">Now</p>
          <p className="medium">{startTime}</p>
          <p className="smaller bold">{startDate}</p>
        </div>
        <div className="timer later">
          <p className="small bold">{caption}</p>
          <p className="medium">{endTime}</p>
          <p className="smaller bold">{endDate}</p>
        </div>
        </div>
        <DateBtnGroup onChange={this.props.onChange}/>
      </div>
		);
	}

});

module.exports = NavExpiryContent;