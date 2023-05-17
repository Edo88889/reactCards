import {useState, useEffect} from "react";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
function Kofi() {
    const [data, setData] = useState([])
        useEffect(() => {
        fetch(url)
        .then(response => response.json())
            .then(result => setData(result.drinks))
        .catch(error => console.log(error));
            console.log(data)
        }, []);
    return(
        <div className='cocktails'>
    {data.map((e) => (
<>
    <a href='#' onClick={(el)=>{
        el.preventDefault()
        alert(e.strGlass)
    }}>DETAILS</a>
    <img src={e.strDrinkThumb} alt='foto' className='foto'/>
    <p>{e.strDrink}</p>
    <p>{e.strGlass}</p>
    <p>{e.strAlcoholic}</p>
</>
        ))}
        </div>
)
}
export default Kofi