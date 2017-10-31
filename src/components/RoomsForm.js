import React from 'react';
import moment from 'moment';

export default class RoomsForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            room_name: props.room ? props.room.room_name : '',
            error: ''
          };
    }

    onRoomNameChange = (e) => {
        const room_name = e.target.value;     
        this.setState(() => ({ room_name }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        if(!this.state.room_name){
            this.setState(() => ({ error: 'Please provide Room Name' }));            
        }else{
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                room_name : this.state.room_name
            });
        }
    };

    render() {
        return (
          <form className="form" onSubmit={this.onSubmit}>
            {this.state.error && <p className="form__error">{this.state.error}</p>}
            <input
              type="text"
              placeholder="Room Name"
              autoFocus
              className="text-input"
              value={this.state.room_name}
              onChange={this.onRoomNameChange}
            />
            <div>
              <button className="button">Add Room</button>
            </div>
          </form>
        )
      }

}

