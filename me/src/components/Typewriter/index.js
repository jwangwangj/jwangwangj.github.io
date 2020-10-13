import React, {Component} from 'react';
// import logo from './logo.svg';
import './index.css';
import PropTypes from 'prop-types'

class Typewriter extends Component {
  props = {
    code: PropTypes.bool,
    staticText: PropTypes.string,
    data: PropTypes.array
  }

  state = {
    typedText: "",
    typing: true,
    index: 0
  }

  componentDidMount() {
    this.animate()
  }

  componentWillUnmount() {
    this.setState({unmount: true})
  }

  animate = () => {
    const { data } = this.props
    const { index } = this.state
    this.typing(data[index])
  }

  typing = (text) => {
    // console.log(text, this.state.index)
    let idx = 0
    const typingInterval = setInterval(() => {
      const {typing} = this.state
      if (text && typing && idx <= text.length){
      this.setState({typedText: text.substring(0, idx)})
      idx++
      } else {
        setTimeout(() => {
          this.setState({typing: false}, this.deleting(idx))
        }, 2000)
        clearInterval(typingInterval)
      }
    }, 32)
  }

  deleting = () => {
    const {data} = this.props
    const deletingInterval = setInterval(() => {
      console.log(this.state.index)

      const {index, typing, typedText} = this.state
      const idx = typedText.length - 1
      if (!typing && idx >= 0){
        this.setState({typedText: typedText.substring(0, idx)})
      } else {
        setTimeout(() => {
          this.setState(
            {
              typing: true, 
              index: index < data.length ? index + 1 : 0
            }, () => this.typing(data[this.state.index])
          )
        }, 1000)
        clearInterval(deletingInterval)
      }
    }, 32)
  }

  render () {
    const {code, staticText} = this.props
    const {typedText} = this.state

    return code ? 
      (<code className="Typewriter">{staticText} {typedText}<span className="blinking">|</span></code>) : 
      (<span className="Typewriter">{staticText} {typedText}<span className="blinking">|</span></span>);
  }
}

export default Typewriter;
