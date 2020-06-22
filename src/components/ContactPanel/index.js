import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';
import Select from 'react-select';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';

export default class InfluencerForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone_number: '',
      handle: '',
      email: '',
      reachable: '',
      followers: '',

      nameError: null,
      phoneError: null,
      followersError: null,
      handleError: null,
      emailError: null,
      reachableError: null,

      loading: false,
      received: false,

      nameValid: false,
      phoneValid: false,
      handleValid: false,
      emailValid: false,
      reachableValid: false,
      followersValid: false,

    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.reachable !== this.state.reachable) {
      this.validateReachable();
    }
  }

  handleSubmit = (e) => {
    const { nameError, phoneError, followersError, handleError, emailError, reachableError } = this.state;
    const { nameValid, phoneValid, handleValid, emailValid, reachableValid, followersValid } = this.state;
    const { name, phone_number, handle, email, reachable, followers } = this.state;

    e.preventDefault();

    this.validateName()
    this.validatePhone()
    this.validateFollowers()
    this.validateHandle()
    this.validateEmail()
    this.validateReachable()

    if (nameValid && phoneValid && handleValid && emailValid && reachableValid && followersValid) {

        this.setState({ loading: true });

        axios.post('/influencers/new', {
          name,
          phone_number,
          handle,
          email,
          reachable: reachable.value,
          followers
        })
        .then((response) => {
          console.log(response);
          this.setState({ loading: false, received: true });
        })
        .catch((error) => {
          console.log(error);
          this.setState({ loading: false, received: false });
        });

      }
  }

  validateName = () => {
    const { name } = this.state;

    if (name.length !== 0) {
      this.setState({ nameError: null, nameValid: true });
    } else {
      this.setState({ nameError: 'Name cannot be blank', nameValid: false });
    }
  }

  validatePhone = () => {
    const { phone_number } = this.state;
    const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    if (phoneRegex.test(phone_number)) {
      this.setState({ phoneError: null, phoneValid: true });
    } else {
      this.setState({ phoneError: 'Phone number must be valid', phoneValid: false });
    }
  }

  validateFollowers = () => {
    const { followers } = this.state;

    if (followers.length > 0) {
      this.setState({ followersError: null, followersValid: true });
    } else {
      this.setState({ followersError: 'Followers must contain a number', followersValid: false });
    }
  }

  validateHandle = () => {
    const { handle } = this.state;

    if (handle.length > 0) {
      this.setState({ handleError: null, handleValid: true });
    } else {
      this.setState({ handleError: 'Handle cannot be blank', handleValid: false });
    }
  }

  validateEmail = () => {
    const { email } = this.state;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailRegex.test(email)) {
      this.setState({ emailError: null, emailValid: true });
    } else {
      this.setState({ emailError: 'Email must be valid', emailValid: false });
    }
  }

  validateReachable = () => {
    const { reachable } = this.state;

    if (reachable !== null && reachable !== '') {
      this.setState({ reachableError: null, reachableValid: true });
    } else {
      this.setState({ reachableError: 'Please select an option', reachableValid: false });
    }
  }

  render() {
    
    const options = [
      { value: 'instagram', label: 'Instagram' },
      { value: 'facebook', label: 'Facebook' },
      { value: 'twitter', label: 'Twitter' },
      { value: 'snapchat', label: 'Snapchat' },
      { value: 'tiktok', label: 'TikTok' },
    ]

    if (this.state.received === false) {

      return (
        <div className="form-box">
        <div className="form-hero">
          Work with us
        </div>
        <div className="form-description">
        If you have an idea for a new product or have a project in mind leave us your info and we’ll be in touch
        </div>
        <form className='influencers-form' onSubmit={this.handleSubmit}>
          <div className='form-fields columns'>
            <div className="form-left column">
              <div className={`form-group ${this.state.nameError ? 'is-invalid' : ''}`}>
                <input
                  name='name'
                  className={`form-control ${this.state.nameError ? 'is-invalid' : ''}`}
                  id='name'
                  placeholder='Your Name'
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value }) && this.validateName()}
                  onBlur={this.validateName}
                />
                <div className='invalid-feedback'>{this.state.nameError}</div>
              </div>

              <div className={`form-group ${this.state.phoneError ? 'is-invalid' : ''}`}>
                <MaskedInput
                  name='phone'
                  className={`form-control ${this.state.phoneError ? 'is-invalid' : ''}`}
                  id='phone'
                  mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                  guide={false}
                  placeholder='Phone number'
                  value={this.state.phone_number}
                  onChange={(e) => this.setState({ phone_number: e.target.value}) && this.validatePhone()}
                  onBlur={this.validatePhone}
                />
                <div className='invalid-feedback'>{this.state.phoneError}</div>
              </div>
            </div>

            <div className="form-right column">
              <div className={`form-group ${this.state.emailError ? 'is-invalid' : ''}`}>
                <input
                  name='email'
                  className={`form-control ${this.state.emailError ? 'is-invalid' : ''}`}
                  id='email'
                  placeholder='Email'
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value}) && this.validateEmail()}
                  onBlur={this.validateEmail}
                />
                <div className='invalid-feedback'>{this.state.emailError}</div>
              </div>

              <div className={`form-group ${this.state.reachableError ? 'is-invalid' : ''}`}>
                <Select
                  className='react-select-container'
                  classNamePrefix="react-select"
                  onChange={(value) => this.setState({ reachable: value })}
                  options={options}
                  isClearable={true}
                  blurInputOnSelect={true}
                  placeholder="What services are you interested in?"
                  onBlur={() => this.validateReachable()}
                />
                <div className='invalid-feedback'>{this.state.reachableError}</div>
              </div>
            </div>
          </div>

          <div className="form-full">
            <div className={`form-group ${this.state.handleError ? 'is-invalid' : ''}`}>
              <textarea
                name='handle'
                className={`form-control ${this.state.handleError ? 'is-invalid' : ''}`}
                id='handle'
                placeholder='What can we help you with?'
                value={this.state.handle}
                onChange={(e) => this.setState({ handle: e.target.value}) && this.validateHandle()}
                onBlur={this.validateHandle}
              />
              <div className='invalid-feedback'>{this.state.handleError}</div>
            </div>
          </div>

          <div className='form-submit'>
            <button className="send">{ this.state.loading ? <BeatLoader size={10} color={'#fff'} /> : 'Send'}</button>
          </div>
        </form>
        </div>
      )
    } else {
      return (
        <div className="received-influencer">
          <div className="form-submit-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 352c0 17.6-14.4 32-32 32H293.3l-8.5 6.4L192 460v-76H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v288zM345.3 134.5c-1.6-1.6-3.6-2.3-5.7-2.3-2 0-4.1.8-5.7 2.3L226.5 241.9 178 193.4c-1.6-1.6-3.6-2.3-5.7-2.3-2 0-4.1.8-5.7 2.3l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l65.5 65.5c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3L356.7 157c3.1-3.1 3.1-8.2 0-11.3l-11.4-11.2z"/></svg>
          </div>
          <div className="form-hero">
            Thanks for applying to Limelit
          </div>
          <div className="form-description">
            Someone will be in touch with you shortly.
          </div>
        </div>
      )
    }
  }
}
