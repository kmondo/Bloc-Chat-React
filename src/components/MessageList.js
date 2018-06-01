import React, {Component} from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: {
        username: '',
        content: '',
        sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
        roomId: ''

      }
    };
    this.messagesRef = this.props.firebase.database().ref('messages');
  }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      console.log("Child Added");
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) })
    });
    console.log(this.state.messages)
  }
//'messages, removed from console.log on line 26
  handleChange(event) {
    this.setState({activeRoom: event.target.value});
  }

  render() {
 const activeRoom = this.props.activeRoom;

 const messageList = (
  this.state.messages.map((message) => {
    if (message.roomId === activeRoom.key) {
      return <li key={message.key}>{message.content}</li>
    }
    return null;
  })
);

return(
  <div>
    <ul>{messageList}</ul>
  </div>
  );
}
}
//   render() {
//     const activeRoom = this.props.activeRoom;
//     //const message = this.state.message;
//       // if (message.roomId === activeRoom) {
//     return(
//       <section>
//         <p>{this.props.activeRoom}</p>
//
//         <table>
//           <tbody>
//           { this.state.messages.map( (message) => (
//             // const activeRoom = this.props.activeRoom;
//               if (message.roomId === activeRoom) {
//                 // return(
//               <tr key={message.key}>
//                 <td>{message.content}</td>
//                 <td>{message.username}</td>
//                 <td>{message.sentAt}</td>
//                 <td>{message.roomId}</td>
//               </tr>
//           }))};
//           </tbody>
//         </table>
//       </section>
//       )
//     );
//   }
// }

export default MessageList;
