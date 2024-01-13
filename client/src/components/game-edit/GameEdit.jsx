import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import * as gameService from "../../services/gameService";
import { useNavigate, useParams } from "react-router-dom"

export default function GameEdit() {  
    const [game, setGame] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    });
    const navigate = useNavigate();
    const {gameId} = useParams()

    useEffect(() => {
        gameService.getOne(gameId).then(result => setGame(result));
    }, [gameId])

    const editFormSibmitHandler = async (values) => {

        try {
            const result = await gameService.edit(gameId, values);

            console.log(result)

            navigate('/games');

        } catch {
            (err) => console.log(err);
        }
    }

    const {values, onChange, onSubmit} = useForm(editFormSibmitHandler, game)
    
    return (
        <section id="create-page" className="auth">
        <form id="create" onSubmit={onSubmit}>
            <div className="container">

                <h1>Create Game</h1>
                <label htmlFor="leg-title">Legendary title:</label>
                <input type="text" id="title" name="title" value={values.title} onChange={onChange} placeholder="Enter game title..." />

                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" value={values.category} onChange={onChange} placeholder="Enter game category..." />

                <label htmlFor="levels">MaxLevel:</label>
                <input type="number" id="maxLevel" value={values.maxLevel} onChange={onChange} name="maxLevel" min="1" placeholder="1" />

                <label htmlFor="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={onChange} placeholder="Upload a photo..." />

                <label htmlFor="summary">Summary:</label>
                <textarea name="summary" onChange={onChange} value={values.summary} id="summary"></textarea>
                <input className="btn submit" type="submit" value="Edit Game"/>
            </div>
        </form>
    </section>
    
    );
}