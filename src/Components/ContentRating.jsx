import React, { Component } from 'react';

class ContentRating extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false
    };
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        {!this.state.showModal ? (
          <>
            <h1>Conditional Rendering</h1>
            <p>Pending</p>
            <button onClick={this.handleOpenModal}>
              Click to View Modal
            </button>
          </>
        ) : (
          <>
            <h1>This is a Modal Window</h1>
            <div>
              <button onClick={this.handleCloseModal}>Cancel</button>
              <button onClick={this.handleCloseModal}>OK</button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default ContentRating;