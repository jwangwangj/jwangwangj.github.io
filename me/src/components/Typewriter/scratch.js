import React, {Component} from 'react';
// import logo from './logo.svg';
import './index.css';
import PropTypes from 'prop-types'

let performanceTime = performance.now();

class Typewriter extends Component {
  props = {
    code: PropTypes.bool,
    staticText: PropTypes.string,
    data: PropTypes.array
  }

  state = {
    text: ""
  }

  index = 0
  rafRef = null
  timeoutRef = null

  componentDidMount() {
    this.animate()
  }

  componentWillUnmount() {
    // cleanup
    if (this.timeoutRef) clearTimeout(this.timeoutRef);
    if (this.rafRef) cancelAnimationFrame(this.rafRef);
  }

  animate = () => {
    // register the very first rAF which will start the animation off
    this.rafRef = requestAnimationFrame(time => {
      // start the typing animation to animate the currently indexed word
      this.typing(time, this.props.data[this.index], () => {
        // typing animation finished, time to start removal animation
        // but first make a pause
        this.timeoutRef = setTimeout(() => {
          this.rafRef = requestAnimationFrame(time => {
            this.deleting(time, () => {
              // removal animation finished, which completes the current animation cycle...
              // so make a pause here & start the next animation cycle
              this.timeoutRef = setTimeout(() => {
                // if on last element, then go back to the first one, else go to the next one
                this.index =
                  this.index === this.props.data.length - 1
                    ? 0
                    : this.index + 1
                // start again...
                this.animate();
              }, 1000);
            })
          })
        }, 1500);
      })
    })
  }

  typing = (time, typed, callback) => {
    // skip animation if the desired number of ms haven't elapsed
    if (time - performanceTime < 32) {
      this.rafRef = requestAnimationFrame(time => {
        this.typing(time, typed, callback);
      });
      return;
    }
    performanceTime = time;
    // add the next character to output
    this.setState({
      text: typed.substr(0, this.state.text.length + 1)
    })
    // if more characters left to type out,
    // then register a call to yourself again to take care of the next character, and so on...
    if (this.state.text.length < typed.length) {
      this.rafRef = requestAnimationFrame(time => {
        this.typing(time, typed, callback);
      })
    } else {
      // if no characters left to type, i.e. all been typed out
      // then let the caller know
      callback();
    }
  }

  deleting = (time, callback) => {
    // skip animation if the desired number of ms haven't elapsed
    if (time - performanceTime < 32) {
      this.rafRef = requestAnimationFrame(time => {
        this.deleting(time, callback);
      });
      return;
    }
    performanceTime = time;
    // remove the next character from output
    this.setState({
      text: this.state.text.substr(0, this.state.text.length - 1)
    });
    // if more characters left to delete,
    // then register a call to yourself again to take care of the next character, and so on...
    if (this.state.text.length !== 0) {
      this.rafRef = requestAnimationFrame(time => {
        this.deleting(time, callback);
      });
    } else {
      // if no characters left to delete, i.e. all been deleted
      // then let the caller know
      callback();
    }
  };

  render () {
    const {code, staticText, data} = this.props
    const {text} = this.state

    const blinking = {
      WebkitAnimation: "1s typing-effect-react step-end infinite",
      MozAnimation: "1s typing-effect-react step-end infinite",
      MsAnimation: "1s typing-effect-react step-end infinite",
      OAnimation: "1s typing-effect-react step-end infinite",
      animation: "1s typing-effect-react step-end infinite"
    };

    return code ? 
      (<code className="Typewriter">{staticText} {text}<span style={blinking}>|</span></code>) : 
      (<span className="Typewriter">{staticText} {text}<span style={blinking}>|</span></span>);
  }
}

export default Typewriter;
