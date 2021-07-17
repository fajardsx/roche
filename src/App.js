import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AppRouter from "./router/Routers";
import { onMessageListener, askForPermissionToReceiveNotification } from "./PushNotication";
import Toast from "react-bootstrap/Toast";
import { ACTION_TYPE } from "./actions/action";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      notification: { title: "", body: "" },
    };
  }

  // const [show, setShow] = useState(false);
  // const [notification, setNotification] = useState({ title: "", body: "" });
  // const [isTokenFound, setTokenFound] = useState(false);
  // useEffect(() => {
  //   if (this.props.tokenFCM) {
  //     askForPermissionToReceiveNotification();
  //   } else {
  //     getToken(setTokenFound);
  //   }
  // });
  componentDidMount() {
    setTimeout(() => {
      console.log("FCM", this.props.tokenFcm);
      if (this.props.tokenFcm === undefined) {
        askForPermissionToReceiveNotification(this.updateFcmToken.bind(this));
      } else {
        this.setTokenFound(true);
      }
    }, 2000);

    this.initmessage();
  }
  setTokenFound(value) {
    this.setState({
      isTokenFound: value,
    });
  }
  updateFcmToken(values) {
    this.props.updateFcm(values);
  }
  initmessage() {
    onMessageListener()
      .then((payload) => {
        this.setState({
          show: false,
          notification: {
            title: payload.notification.title,
            body: payload.notification.body,
          },
        });
        // setNotification({
        //   title: payload.notification.title,
        //   body: payload.notification.body,
        // });
        console.log("payload ", payload);
      })
      .catch((error) => console.log("failed " < error));
  }

  render() {
    const { show, notification, isTokenFound } = this.state;
    return (
      <div className="App-Container">
        <AppRouter />
        {
          //Toast For Notification
        }
        <Toast
          onClose={() => this.setState({ show: false })}
          show={show}
          delay={3000}
          autohide
          animation
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            minWidth: 200,
          }}>
          <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">{notification.title}</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>
            <img src={notification.image} className="rounded mr-2" alt="" />
            {notification.body}
          </Toast.Body>
        </Toast>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authType: state.authType,
    tokenFcm: state.tokenFcm,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    rotateAction: (data) =>
      dispatch({
        type: ACTION_TYPE.UPDATE_AUTH,
        value: data,
      }),
    updateFcm: (data) =>
      dispatch({
        type: ACTION_TYPE.UPDATE_FCM_TOKEN,
        value: data,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

/*
  <h5>{isTokenFound == false ? "Token not found" : "token found"}</h5>
        {isTokenFound == false && (
          <button
            onClick={() => {
              askForPermissionToReceiveNotification(this.updateFcmToken.bind(this));
            }}>
            Permission notification
          </button>
        )} 
*/
