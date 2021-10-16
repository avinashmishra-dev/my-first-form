import { useState } from "react";

const BasicForm = (props) => {

  const[enteredFirstName,setEnteredFirstName] =useState('');
  const[enteredLastName,setEnteredLastName] =useState('');
  const[enteredEmail,setEnteredEmail]=useState('');
  const[enteredDetailIsValid,setEnteredDetailIsValid] = useState(true)

  const firstNameInputHandler = (event)=>{
    setEnteredFirstName(event.target.value);
  };

  const lastNameInputHandler = (event)=>{
    setEnteredLastName(event.target.value);
  };

  const emailInputHandler = (event)=>{
    setEnteredEmail(event.target.value);
  }

  const formSubmissionHandler = (event)=>{
    event.preventDefault();
    if(enteredEmail.trim()==='' || enteredFirstName.trim()=== '' || enteredLastName.trim()===''){
      setEnteredDetailIsValid(false);
      return;
    }
    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);
    setEnteredEmail('');
    setEnteredFirstName('');
    setEnteredLastName('');
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='first-name'>First Name</label>
          <input type='text' id='first-name' value={enteredFirstName} onChange={firstNameInputHandler}/>
        </div>
        <div className='form-control'>
          <label htmlFor='last-name'>Last Name</label>
          <input type='text' id='last-name' value={enteredLastName} onChange={lastNameInputHandler}/>
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email' value={enteredEmail} onChange={emailInputHandler}/>
      </div>
      {!enteredDetailIsValid && <p>Email is not valid</p>}
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
