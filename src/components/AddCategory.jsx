
import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('One Punch')

     const onInputChange=(event)=>{
        setInputValue(event.target.value);
     }

     const onSubmit=(event)=> {
        event.preventDefault();
        const trimmedValue = (inputValue || '').trim(); // Usar cadena vacía si inputValue es null o undefined
        if (trimmedValue.length > 0) {
          onNewCategory(trimmedValue);
          setInputValue('');
        }

        
     }
  return (
    <form onSubmit={(event)=>{onSubmit(event)}}>
        <input type="text"
                placeholder='buscar gifs'
                value={inputValue}
                onChange={ (event) => onInputChange(event) }
                >
                

        </input>
    </form>
  )
}
