import React from 'react';
import Form from './Form'
import DisplayData from './DisplayData'

const ParentComponent = () => {
  return(
    <div>
    <Form
      firstName={firstName}
      lastName={lastName}
      handleFirstNameChange={handleFirstNameChange}
      handleLastNameChange={handleLastNameChange}
    />
    <DisplayData firstName={firstName} lastName={lastName} />
  </div>
  )
};

export default ParentComponent;
