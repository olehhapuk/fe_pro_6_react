import { Component } from 'react';

/**
 * 1: 
   constructor() {
      super();
      this.handleClick = this.handleClick.bind(this);
   }
   2: onClick={() => this.handleClick()}
 */

/**
* Old state
* constructor(props) {
    super(props);

    this.state = {
      visible: false,
      myMessage: this.props.message,
    };
  }
*/

export default class Switch extends Component {
  state = {
    visible: false,
    myMessage: this.props.message,
  };

  show = () => {
    this.setState({
      visible: true,
    });
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.show}>
          Показати
        </button>
        <button type="button" onClick={this.hide}>
          Сховати
        </button>

        {this.state.visible && <p>{this.props.message}</p>}
      </div>
    );
  }
}
