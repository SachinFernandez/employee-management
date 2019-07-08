import React from "react";
import "./App.css";
import Input from "./Components/InputComponents/Input";
import Select from "./Components/InputComponents/Select";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstname: "",
        dateofbirth: "",
        phonenumber: "",
        gender: "",
        email: "",
        age: "",
        salary: "",
        resume: ""
      },
      genderlist: [
        { id: 1, value: "male" },
        { id: 2, value: "female" },
        { id: 3, value: "other" }
      ]
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeHandler = ({ currentTarget: input }) => {
    const user = { ...this.state.user };
    user[input.name] = input.value;
    this.setState({ user });
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.user);
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <span className="App-header">Employee Management</span>
        <form className="container mt-5 pl-5" onSubmit={this.handleSubmit}>
          <div className="form-group alignForm">
            <Input
              name={"firstname"}
              value={user.firstname}
              placeholder={"First Name"}
              type={"text"}
              onChange={this.onChangeHandler}
            />
            <Input
              name={"dateofbirth"}
              value={user.dateofbirth}
              placeholder={"Date Of Birth"}
              type={"date"}
              onChange={this.onChangeHandler}
            />
            <Input
              name={"phonenumber"}
              value={user.phonenumber}
              placeholder={"Phone Number"}
              type={"number"}
              onChange={this.onChangeHandler}
            />
            <Select
              name={"gender"}
              placeholder={"Select Gender"}
              onChange={this.onChangeHandler}
              optionList={this.state.genderlist}
              value={user.gender}
            />
            <Input
              name={"email"}
              value={user.email}
              placeholder={"Email"}
              type={"email"}
              onChange={this.onChangeHandler}
            />
            <Input
              name={"age"}
              value={user.age}
              placeholder={"Age"}
              type={"number"}
              onChange={this.onChangeHandler}
            />
            <Input
              name={"salary"}
              value={user.salary}
              placeholder={"Salary"}
              type={"number"}
              onChange={this.onChangeHandler}
            />
            <div className="mb-4 w-25 form-group form-inline">
              <label htmlFor="exampleFormControlFile1 m-0">Resume</label>
              <input
                type="file"
                name="resume"
                className="form-control-file"
                id="exampleFormControlFile1"
                value={user.resume}
                onChange={this.onChangeHandler}
              />
            </div>
          </div>
          <div className="input-group">
            <button className="button" type="submit" value="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
