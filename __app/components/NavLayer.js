/** @jsx React.DOM */

var React = require('react/addons');
var cx = React.addons.classSet;
var UploadProgress = require('./UploadProgress');
var ConfirmButtons = require('./ConfirmButtons');

var NavLayer = React.createClass({
  transitionTo: function(state) {
    switch(state) {
      case 'uploading':
        this.setState({
          bg: 'blue',
          showProgress: true
        });
        break;
      case '1hr':
        this.setState({
          bg: 'green',
          showProgress: false
        });
        break;
      case '7hrs':
        this.setState({
          bg: 'yellow',
          showProgress: false
        });
        break;
      case '12hrs':
        this.setState({
          bg: 'orange',
          showProgress: false
        });
        break;
      case '24hrs':
        this.setState({
          bg: 'red',
          showProgress: false
        });
        break;
      default:
        this.setState({bg: null});
    }
  },
  setProgress: function(progress) {
    this.setState({progress: progress});
  },
  getInitialState: function() {
    return {
      bg: null,
      caption: null,
      showProgress: false,
      progress: 0
    }
  },
  render: function() {
    var classes = cx({
      'default': !this.state.bg,
      'blue': this.state.bg === 'blue',
      'green': this.state.bg === 'green',
      'yellow': this.state.bg === 'yellow',
      'orange': this.state.bg === 'orange',
      'red': this.state.bg === 'red'
    });
    var confirmBtnClasses = cx({
      '': !this.state.showProgress && this.state.bg,
      ' hide': this.state.showProgress || !this.state.bg || this.state.bg === 'blue'
    });
    var contentClass = cx({
      '': this.state.bg,
      ' hide': !this.state.bg || this.state.bg === 'blue'
    });
    return (
      <div className={'layer-2 ' + classes}>
        <header>
          <div className="logo">
            <a href="/"><img src="/assets/img/logo.png" alt="Approview logo"/></a>
          </div>
          <div className="caption-center">Freeview</div>
          <div className="caption-left">+3</div>
        </header>
        <UploadProgress progress={this.state.progress} show={this.state.showProgress}/>
        <div className={"content" + contentClass}>
          <p className="large">24 hours</p>
          <p className="large">auto-deletion</p>
          <div className="timer now">
            <p className="small bold">Now</p>
            <p className="medium">1:20 AM</p>
            <p className="smaller bold">12/19/15</p>
          </div>
          <div className="timer later">
            <p className="small bold">Tomorrow</p>
            <p className="medium">1:20 PM</p>
            <p className="smaller bold">12/20/15</p>
          </div>
        </div>
        <footer>
          <div className={"date-buttons" + contentClass}>
            <button type="button" className="btn btn-default btn-circle">1</button>
            <button type="button" className="btn btn-default btn-circle">7</button>
            <button type="button" className="btn btn-default btn-circle">12</button>
            <button type="button" className="btn btn-default btn-circle">24</button>
          </div>
          <div className="menu-toggle hidden">
            <a href="#" id="toggle-menu">
              <i className="fa fa-bars fa-2x fa-rotate-90">
              </i>
            </a>
          </div>
          <div className="confirm-buttons">
            {cancelButton}
            <button type="button" className={"btn btn-default btn-circle" + confirmBtnClasses}><i className="ion-ios7-close-empty"></i></button>
            <div className={"hour-caption" + confirmBtnClasses}>
              <div>12</div>
              <span className="smallest">HOURS</span>
            </div>
            <button type="button" className={"btn btn-default btn-circle" + confirmBtnClasses}><i className="ion-ios7-checkmark-empty"></i></button>
          </div>
          <ul>
            <li><a href="#">GUIDE</a></li>
            <li><a href="#">TERMS</a></li>
            <li><a href="#">UPGRADE</a></li>
            <li><a href="#">CONTACT</a></li>
            <li><a href="#">MAKER</a></li>
          </ul>
        </footer>
      </div>
    );

    var cancelButton = function() {
      return this.state.showProgress && (
        <button type="button" className="btn btn-default btn-circle">
          <i className="ion-ios-checkmark-empty"></i>
        </button>
      );
    }.bind(this)();
  }
});
module.exports = NavLayer;