import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import api from '../../api';
import ProgressBar from '../common/ProgressBar';
import StepEmail from './StepEmail';
import StepPassword from './StepPassword';
import StepEnd from './StepEnd';
import './index.scss';

export default function Signup() {
  const history = useHistory();
  const [currentStep, setCurrentStep] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function incrementStep(value = 1) {
    setCurrentStep(currentStep + value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleStepPasswordSubmit() {
    setLoading(true);
    try {
      await api.signup({ email, password });
      setLoading(false);
      incrementStep(1);
    } catch (e) {
      console.error(e);
      window.alert('Oops! Unable to sign up, check your email or password.');
      setLoading(false);
    }
  }

  async function handleStepEndSubmit() {
    setLoading(true);
    try {
      await api.signin({ email, password });
      setLoading(false);
      history.push('/note');
    } catch (e) {
      console.error(e);
      window.alert('Oops! Something looks wrong, unable to access your note.');
      setLoading(false);
    }
  }

  function getCurrentStepComponent() {
    switch (currentStep) {
      case 0:
        return (
          <StepEmail
            value={email}
            onChange={handleEmailChange}
            onSubmit={() => incrementStep(1)}
          />
        );
      case 1:
        return (
          <StepPassword
            value={password}
            onChange={handlePasswordChange}
            onSubmit={handleStepPasswordSubmit}
            onGoBack={() => incrementStep(-1)}
            loading={loading}
          />
        );
      case 2:
        return (
          <StepEnd username={getUsername()} onSubmit={handleStepEndSubmit} />
        );
      default:
        return null;
    }
  }

  function getUsername() {
    let [username] = email.split('@');

    return username.length ? username : undefined;
  }

  function getCurrentStepPercent() {
    return (100 / 3) * (currentStep + 1);
  }

  return (
    <div className="Page">
      <main>
        <ProgressBar
          className="StepStatus"
          percentValue={getCurrentStepPercent()}
        />
        <h1>Sign up</h1>
        {getCurrentStepComponent()}
      </main>
    </div>
  );
}
