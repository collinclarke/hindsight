import React, { Component } from 'react';
import * as firebase from 'firebase';

class Upload extends Component {

  constructor() {
    super();
    this.state = {
      name: null,
      size: null,
      type: null,
      file: null,
      isUploading: false,
      location: null,
      error: null,
    }
    this.storageRef = firebase.storage().ref();
  }

  onFileInput = e => {
    const { files } = e.target;
    const file = files[0];
    if (file) {
      const { name, size, type } = file;
      this.setState({ name, size, type, file });
    }
    fetch("https://freegeoip.net/json/")
    .then( res => res.json() )
    .then(
      (result) => {
        this.setState({
          location: result
        }, () => console.log(this.state));
      },
      (error) => {
        this.setState({
          error
        });
      }
    )
  }

  completeUpload = () => {
    this.setState({ isUploading: false });
  }

  onSubmit = e => {
    e.preventDefault();
    const { storageRef } = this;
    const { name, file, location } = this.state;
    debugger
    const time = new Date();
    if (file) {
      this.setState({isUploading: true}, () => {
        console.log(this.state);
        const imgKey = firebase.database().ref().child('images').push().key;
        const fileRef = storageRef.child('images/' + imgKey);
        const basicInfo = {
          'name': name,
          'date': time.toString()
        }
        const customMetadata = Object.assign({}, basicInfo, location)
        const metaData = {
          customMetadata
        }
        fileRef.put(file, metaData).then( snapshot => {
          this.completeUpload();
        }, this.completeUpload )
      });
    } else {
      window.alert("please choose a file to upload");
    }
  }

  render() {
    const { isUploading } = this.state;
    return (
      <form encType="multipart/form-data" onSubmit={this.onSubmit}>
        <div>
          <label htmlFor="file">Choose file to upload</label>
          <input
            ref="fileUpload"
            onChange={this.onFileInput}
            type="file" name="file" accept="image/*"
          />
        </div>
        <div>
          {<button disabled={ isUploading }>Submit</button>}
        </div>
      </form>
    )
  }
}

export default Upload;
