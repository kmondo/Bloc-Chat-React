import React, { Component } from 'react';


class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    };
    this.roomsRef = this.props.firebase.database().ref('rooms');
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.roomsRef.push({
    //   name: newRoomName
    // });-where does this go??
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if(this.state.newRoomName === 'New room') {
      alert('A new chat room was created:' + this.state.value);
    } else {
      this.roomsRef.push({
        name: newRoomName
      });
      event.preventDefault();
    }


  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) })
    });
  }

  // createRoom() {
  // const newRoomName = {
  //  this.roomsRef.push({
  //  name: newRoomName
  //   })
  // }

  render() {
    return (
      <section>
        { this.state.rooms.map( (room, firebase) =>
          <li>{ room.name }</li>
        )}
        <section>
          <form onSubmit={this.handleSubmit}>
            <label>Create a Room:
            <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </section>
      </section>

    );
  }
}

export default RoomList;
