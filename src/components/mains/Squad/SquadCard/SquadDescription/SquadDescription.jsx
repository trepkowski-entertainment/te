
import { Link } from "react-router-dom"

export const SquadDescription = ({ descLive }) => {
    return(
        <div>
            <p>{descLive}</p>
            <Link to='/squad'>mniej</Link>
        </div>
    )
}