import { Link } from "react-router-dom"


export const NotFound = () => {

    return(
        <div>
            <h2>Upsss...  Coś poszło nie tak...</h2>
            <h3>Przejdź na stronę:</h3>
            <p>
                <a href="https://trepkowski-entertainment.github.io/te">
                    Trepkowski Entertainment</a>
            </p>
            <Link to='/'>home</Link>
        </div>
    )
}


