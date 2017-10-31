import React from 'react';
import { connect } from 'react-redux';
import RoomsForm from './RoomsForm'
import { startAddRoom } from '../actions/rooms';

export class DashboardPage extends React.Component {
  onSubmit = (room) => {
    // console.log(this.props);s
    const query = this.props.startAddRoom(room);
    query.catch((e) => {
      console.log(e.message);
    });

    this.props.history.push('/');
  };

  render() {
    return (
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add a Room</h1>
          </div>
          <div className="content-container">
          <RoomsForm
              onSubmit={this.onSubmit}
            />
          </div>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddRoom: (room) => dispatch(startAddRoom(room))
});

export default connect(undefined, mapDispatchToProps)(DashboardPage);
