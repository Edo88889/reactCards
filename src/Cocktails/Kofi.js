import {useState, useEffect} from "react";
import './Index.css';
function Kofi() {
    const [data, setData] = useState([])
    const [values, setValues] = useState('')
    console.log(values)
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${values}`
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(result => setData(result.drinks))
            .catch(error => console.log(error));
    }, [url]);
    return (
        <>
            <input type='text' value={values} className='value' placeholder='name Cocktails' onChange={(e) => {
                setValues(e.target.value)
            }}/>
            <h1 className='title'>Cocktails</h1>
            <div className='cocktails'>
                {data?.map(({strDrink,strGlass,strAlcoholic,strDrinkThumb,idDrink}) => (
                    <div key={idDrink} className='cards'>
                        <img src={strDrinkThumb} alt='foto' className='foto'/>
                        <p className='p'>{strDrink}</p>
                        <p className='p'>{strGlass}</p>
                        <p className='p'>{strAlcoholic}</p>
                       <button className='href' onClick={()=>{
                           localStorage.setItem(idDrink,strDrink)
                           setData(data.filter((e) => e.idDrink != idDrink))
                       }}>DETAILS</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Kofi
