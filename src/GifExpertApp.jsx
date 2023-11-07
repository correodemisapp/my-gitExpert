import React, { useState } from 'react'
import {AddCategory} from './components'
import { GifGrid } from './components'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['one punch','dragon Ball'])

  const onAddCategory=(newCategory)=>{ 
     // Crear un nuevo array que incluye las categorías antiguas y la nueva categoría
     //const newCategories = [...categories, 'SuperHero'];
     if (!categories.includes(newCategory)) {
      // Si no existe, agregar el nuevo elemento al arreglo
      setCategories([newCategory ,...categories]);
    } else {
      console.log(`El elemento "${newCategory}" ya existe en el arreglo.`);
    }
  }

  return (
    <>
      {/* Titulo */}
        <h1>GifExpertApp</h1>

       {/* Tituinputlo */}  

        {/* Listado de Gifs */}
        <AddCategory onNewCategory={value=> onAddCategory(value)}/>
  
        {/* <button className="button" onClick={onAddCategory}> Agregar </button> */}

        {categories.map(category => (
          <GifGrid key={category} category={category} />
        ))}


        {/* Gif Item */}

    </>
  )
}


