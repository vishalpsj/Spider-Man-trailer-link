import SpidermanCard from "../api/SpidermanCards.json"
import { SpidermanCardDetails } from "./SpidermanCardDetails"
export const SpidermanMovies = () => {
    return (
            <ul className="grid grid-three-cols">
                {SpidermanCard.map((curElem) => <SpidermanCardDetails key={curElem.releaseYear} curElem={curElem} /> )}
            </ul>
    )
}