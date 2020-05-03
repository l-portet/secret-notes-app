import React, { useState } from 'react';
import ProgressBar from '../common/ProgressBar';
import StepEmail from './StepEmail';
import StepPassword from './StepPassword';
import StepEnd from './StepEnd';
import './index.scss';

export default function Signup() {
  const [currentStep, setCurrentStep] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function incrementStep(value = 1) {
    setCurrentStep(currentStep + value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
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
            onSubmit={() => incrementStep(1)}
            onGoBack={() => incrementStep(-1)}
          />
        );
      case 2:
        return <StepEnd username={getUsername()} />;
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
