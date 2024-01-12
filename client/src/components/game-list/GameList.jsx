import { useEffect, useState } from "react";
import * as gameService from "../../services/gameService";
import GameListItem from "./game-list-item/gameListItem";

export default function GameList () {
    const [allGames, setAllGames] = useState([])

    useEffect(() => {
        gameService.getAll().then(data => setAllGames(data)).catch((err) => console.log(err))
    }, [])

    return (
        <section id="catalog-page">
        <h1>All Games</h1>

        {allGames.map(game => (
            < GameListItem key={game._id} {...game}/>
        ))}


        {allGames.length == 0 && <h3 className="no-articles">No articles yet</h3>}

    </section>
    );
}