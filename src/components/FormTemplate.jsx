import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function FormTemplate({ fields, buttonLabel, onSubmit}) {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
      const val = useSelector((state) => state.current.value)
      const data = useSelector((state)=> state.current.data)
useEffect(()=> {
    if (buttonLabel === "Update Task") {
      setFormData({name : data});
}},[]);
const handleChange = (inputName, inputValue) => {
  setFormData(prevState => ({ ...prevState, [inputName]: inputValue }));
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if(buttonLabel== editTask.buttonLabel){
    onSubmit(val, formData)
        console.log(formData)
    }
    else{
      onSubmit(formData)
    }
    navigate('/')
  };

  return (
    <form className="flex flex-col items-center mx-auto mt-80 justify-center max-w-100 border-3 border-blue-900 rounded-md p-5" onSubmit={handleSubmit}>
        <h2 className='mb-2 text-2xl'>Task Details</h2>
              {fields.map(({name, label, type, placeholder}) => (

           <div>
        <label>{label} : </label>
        <input
          type={type}
          name={name}
          value={(formData[name] || "")}
          placeholder={placeholder}
          className='p-2'
          onChange={(e) => handleChange(name, e.target.value)}     
          required
        />
      </div>))}
      <br />
      <button type="submit">{buttonLabel}</button>
    </form>
  );
}

export default FormTemplate;


// formConfigs.js
export const addTask = {
  fields: [
    { name: "name", label: "Name", type: "text", placeholder: "Enter Name" },
  ],
  buttonLabel: "Add Task",
};

export const editTask = {
  fields: [
    { name: "name", label: "Name", type: "text" },
  ],
  buttonLabel: "Update Task",
};

