import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Login from "../Login/login";
import ModalError from "../Modals&Spinners/modalError";
// import {loginUser} from "../../redux/home/actions/user-actions"

class LoginContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      modalStatus: false,
      modalMsj: "",
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {}
  onHandleChange(e) {

    this.setState({
      [e.target.name]: e.target.value
    });

  }

  onHandleSubmit(e) {
    e.preventDefault();
  
    this.props
      .loginUser(this.state)
      .then(user => {
          console.log(user, "soy user del index")
        this.props.history.push("/home");
      })
      .catch(() => {
        this.setState({
            modalStatus:true,
            modalMsj: "Ups!...Please verify your username or password.."
        })
      });
  }
  toggle() {
    this.setState({
      modalStatus: !this.state.modalStatus
    });
  }

  render() {
    return (
      <>
        <Login
          handleChange={this.onHandleChange}
          handleSubmit={this.onHandleSubmit}
        />
        <ModalError modalStatus={this.state.modalStatus} toggle = {this.toggle} modalMsj = {this.state.modalMsj}/>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
      // loginUser: (user) => dispatch(loginUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
