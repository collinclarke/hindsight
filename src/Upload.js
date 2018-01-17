import React, { Component } from 'react';
import * as firebase from 'firebase';
import './Upload.css';

class Upload extends Component {

  static defaultState() {
    return {
      name: null,
      size: null,
      type: null,
      file: null,
      isUploading: false,
      error: null,
      source: null
    }
  }

  constructor(props) {
    super(props);
    this.state = Upload.defaultState();
    this.storageRef = firebase.storage().ref();
  }

  onFileInput = e => {
    const { files } = e.target;
    const file = files[0];
    if (file) {
      const { name, size, type } = file;
      const source = window.URL.createObjectURL(file);
      this.setState({ name, size, type, file, source });
    }
  }

  completeUpload = () => {
    this.setState({ isUploading: false });
    this.clearForm();
  }

  clearForm = () => {
    this.setState(Upload.defaultState());
  }

  onSubmit = e => {
    e.preventDefault();
    const { storageRef } = this;
    const { name, file, size } = this.state;
    const { location } = this.props;
    const time = new Date();
    if (file && size < (1048576 * 5)) {
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
      this.clearForm();
      window.alert("please choose a valid file to upload");
    }
  }

  render() {
    const { isUploading, source, file } = this.state;
    return (
      <form className="Upload" encType="multipart/form-data" onSubmit={this.onSubmit}>
        { file ?
          <div className="Upload-preview">
            <button
              type="button"
              className="Upload-button"
              onClick={this.clearForm}
            >Clear</button>
            <img src={source} alt="user-upload"/>
            <button
              className="Upload-button"
              disabled={ isUploading }
            >Submit</button>
          </div> :
          <div>
            <label className="Upload-label" htmlFor="file">Click to Upload</label>
            <input
              className="Upload-input"
              ref="fileUpload"
              onChange={this.onFileInput}
              type="file" name="file" id="file" accept="image/*"
            />
            <div className="Upload-reqs">
              Max size 5mb
            </div>
          </div>
        }
      </form>
    )
  }
}

export default Upload;
