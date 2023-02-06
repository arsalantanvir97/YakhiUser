import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SignaturePad from 'react-signature-canvas'

import styles from './styles.module.css'

export class Signature extends Component {
  state = { trimmedDataURL: null }
  sigPad = {}
  clear = (e) => {
    this.sigPad.clear()
    e.preventDefault()
    // window.location.href = window.location.href;
  }
  trim = async (e) => {
    await this.setState({
      trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL('image/png'),
    })
    console.log('this.state.trimmedDataURL', this.state.trimmedDataURL)
    this.props.setAllValues({
      ...this.props.allValues,
      ['signature']: this.state.trimmedDataURL,
    })
    e.preventDefault()
  }
  render() {
    let { trimmedDataURL } = this.state
    return (
      <div className={styles.container}>
        <div className={styles.sigContainer}>
          <SignaturePad
            canvasProps={{ className: styles.sigPad }}
            ref={(ref) => {
              this.sigPad = ref
            }}
          />
        </div>
        <div>
          <button className={styles.buttons} onClick={this.clear}>
            Clear
          </button>
          <button className={styles.buttons} onClick={this.trim}>
            Save
          </button>
        </div>
        {trimmedDataURL ? (
          <img className={styles.sigImage} src={trimmedDataURL} />
        ) : null}
      </div>
    )
  }
}
