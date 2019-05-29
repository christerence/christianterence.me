import React from "react";
import "./terminal.scss";
import history from "../../history";

const eCommands = [
  "",
  "ihy sammy",
  "help",
  "about",
  "exit",
  "back",
  "christian",
  "snapchat",
  "song-organizer"
];

export default class Terminal extends React.Component {
  state = {
    command: "",
    commands: [],
    content: null,
    dead: false
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    if (this.body) {
      const scrollHeight = this.body.scrollHeight;
      const height = this.body.clientHeight;
      const maxScrollTop = scrollHeight - height;
      this.body.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }
  }

  reset = () => {
    setTimeout(() => {
      history.push("/");
    }, 5000);
  };

  onChangeCommand = e => {
    const text = e.target.value;
    this.setState({
      command: text
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { commands, command } = this.state;
    const existing =
      eCommands.findIndex(val => {
        return val === command;
      }) === -1;
    if (command === "rm -rf ~") {
      this.setState({
        dead: true
      });
      this.reset();
      return;
    }
    commands.push({ text: command, error: existing });
    const node = this.generateContent(command);
    this.setState({
      command: "",
      commands: commands,
      content: node
    });
  };

  generateContent = command => {
    switch (command) {
      case "ihy sammy":
        return <a href="https://sammyt9.github.io/">IHY SAMMY</a>;
      case "christian":
        return (
          <img
            className="terminal-pic"
            src={require("../../assets/images/profilepicture.jpeg")}
          />
        );
      case "snapchat":
        return (
          <img
            className="terminal-pic"
            src={require("../../assets/images/snapcode.svg")}
          />
        );
        break;
      case "help":
        return (
          <div className="terminal-help">
            Available Commands:
            {eCommands.map((val, idx) => {
              if (val !== "ihy sammy") {
                return (
                  <div key={`Existing Commands ${idx}`}>Command: {val}</div>
                );
              }
            })}
          </div>
        );
      case "exit":
        history.push("/");
        break;
      case "back":
        history.push("/");
        break;
      case "about":
        history.push("/about");
        break;
      case "song-organizer":
        window.open("https://intense-savannah-90302.herokuapp.com/");
        break;
      case "github":
        window.open("https://github.com/christerence");
        break;
      default:
        return <div className="terminal-error" />;
    }
  };

  render() {
    const { command, commands, content, dead } = this.state;
    return (
      <div className="terminal-container">
        {!dead && (
          <React.Fragment>
            <div className="terminal-header">Terminal</div>
            <div className="terminal-screen">
              <div
                className="terminal-body"
                ref={body => {
                  this.body = body;
                }}
              >
                <div className="terminal-command">source ~/.bash_profile</div>
                <div className="terminal-command">
                  Current login: {new Date().toString()} on ttys001
                </div>
                <div className="terminal-command">Enter exit to go back.</div>
                {commands &&
                  commands.map((val, idx) => (
                    <React.Fragment key={idx}>
                      <div className="terminal-command">
                        {idx + 1} christian in ~ > {val.text}
                      </div>
                      {val.error && (
                        <div className="terminal-command">
                          -bash: {val.text}: command not found
                        </div>
                      )}
                    </React.Fragment>
                  ))}
              </div>
              {content && <div className="terminal-content">{content}</div>}
            </div>
            <form onSubmit={this.onSubmit} className="terminal-wrapper">
              <p className="terminal-text">></p>
              <input
                autoFocus
                className="terminal-input"
                value={command}
                onChange={this.onChangeCommand}
              />
            </form>
          </React.Fragment>
        )}
        {dead && <div className="terminal-error" />}
      </div>
    );
  }
}
