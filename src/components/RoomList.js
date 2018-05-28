import React, { Component } from 'react';


class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      newRoomName: ''
    };
    this.roomsRef = this.props.firebase.database().ref('rooms');
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createRoom = this.createRoom.bind(this);
  }

  handleChange(event) {
    this.setState({newRoomName: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.newRoomName !== '') {
      this.createRoom(this.state.newRoomName);
      this.setState({newRoomName: ''});
      //clear box info
      // if (!this.state.newRoomName) {return}
      // this.setState({newRoomName: ''});
      // // const newRoomName = '';
      // this.setState({ rooms: [...this.state.rooms, newRoomName]})
    }


  }



  createRoom(roomName) {
    this.roomsRef.push({
      name: roomName
    });
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) })
    });
  }

  render() {
    return (
      <section>
        { this.state.rooms.map( (room) =>
          <li key={room.key}>{ room.name }</li>
        )}
        <section>
          <form onSubmit={this.handleSubmit}>
            <label>Create a Room:
            <textarea value={this.state.newRoomName} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </section>
      </section>

    );
  }
}

export default RoomList;
