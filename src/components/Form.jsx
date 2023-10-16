import { Button } from "./Button";
import  {useState}  from "react";
export function  Form ({onSubmit}) {
  
  const [name,setName] = useState('');
  const [number,setNumber] = useState('');

const handleInput = evt => {
  setName (evt.target.value);
  }

const handleNumber = evt => {
  setNumber(evt.target.value);
  }
      
const handleSubmit = evt => {
        evt.preventDefault();
        onSubmit({name,number});
        reset();
      };
    
      const reset = () => {
        setName('');
        setNumber('');
      };
        return (
        <form onSubmit={handleSubmit}>
        <label  style={{       
         display: 'flex',
          }}>
          Name
       <input
        
      type="text"
      name="name"
      value={name}
         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
      onChange = {handleInput}
/>
</label>

<label>
Number
<input
  type="tel"
  name="number"
  value={number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  onChange = {handleNumber}
/>
<br/>
</label>
<Button/>
</form>
)
}
