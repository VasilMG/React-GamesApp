import { useContext, useEffect, useMemo, useReducer, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOne } from "../../services/gameService";
import { commentCreate, getCommentsAll } from "../../services/commentService";
import { AuthContext } from "../../contexts/authContext";
import reducer from "./commentsReducer";
import {useForm} from '../../hooks/useForm'
import { pathUrl } from "../../utils/pathUtils";
import Path from '../../paths'


export default function GameDetails() {
    const {email, userID} = useContext(AuthContext)
    const [game, setGame ] = useState({})
    const [comments, dispatch] = useReducer(reducer,[])
    

    const {gameId} = useParams();

    useEffect(() => {
        getOne(gameId).then(currGame => setGame(currGame));

        getCommentsAll(gameId).then((result) => dispatch({
            type: "GET_ALL_COMMENTS",
            something: result,
        }));
    }, [gameId])

    const addCommentHandler = async (values) => {
        const comment = await commentCreate(gameId, values.comment )
        comment.owner = {email};

        dispatch({
            type: 'ADD_COMMENT',
            something: comment,
        })
    }

    const initialComment = useMemo(() => ({
        comment: '',
}), [])

    const {values, onChange, onSubmit} = useForm(addCommentHandler, initialComment)

    
    const isOwner = userID === game._ownerId
    console.log(userID)
    console.log(game._ownerId)
    console.log(isOwner)

    return (
        <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">

            <div className="game-header">
                <img className="game-img" src={game.imageUrl} />
                <h1>{game.title}</h1>
                <span className="levels">MaxLevel: {game.maxLevel}</span>
                <p className="type">{game.category}</p>
            </div>

            <p className="text">
                {game.summary}
            </p>

            {/* <!-- Bonus ( for Guests and Users ) --> */}
            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    {/* <!-- list all comments for current game (If any) --> */}
                    {comments.map(comment => (
                        <li key={comment._id} className="comment">
                        <p>{comment.owner.email}: {comment.text}</p>
                    </li>

                    ))}
                </ul>
                {/* <!-- Display paragraph: If there are no games in the database --> */}
                {comments.length == 0 && (<p className="no-comment">No comments.</p>)}
                
            </div>

            {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
            {isOwner && (
                <div className="buttons">
                <Link to={pathUrl(Path.GameEdit, {gameId})} className="button">Edit</Link>
                <Link to="/games/:gameId/delete" className="button">Delete</Link>
                </div>

            )}
        </div>

        {/* <!-- Bonus -->
        <!-- Add Comment ( Only for logged-in users ) --> */}
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={onSubmit}>
                {/* <input type="text" name="username" placeholder="username" /> */}
                <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>

    </section>
    );
}