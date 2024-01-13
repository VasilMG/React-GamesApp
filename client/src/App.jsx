import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./components/home/Home"
import GameList from "./components/game-list/GameList"
import GameCreate from "./components/game-create/GameCreate"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import GameDetails from "./components/game-details/GameDetails"

import { AuthProvider } from "./contexts/authContext.jsx"

import Path from "./paths"
import Logout from "./components/logout/Logout"
import GameEdit from "./components/game-edit/GameEdit.jsx"
import ErrorBoundary from "./components/ErrorBoundary.jsx"
// import AuthGuard from "./components/guards/AuthGuard.jsx"
import SecondAuthGuard from "./components/guards/SecondAuthGuard.jsx"


function App() {

    return (
        <ErrorBoundary>
            <AuthProvider> 
                <div id="box">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/register" element={<Register />}/>
                        <Route path="/games" element={<GameList />}/>
                        {/* <Route path="/games/create" element={<AuthGuard><GameCreate /></AuthGuard>}/>
                        <Route path={Path.GameEdit} element={<GameEdit />}/> */}
                        <Route path="games/:gameId" element={<GameDetails />}/>
                        {/* <Route path={Path.Logout} element={<Logout />}/> */}

                        <Route element={<SecondAuthGuard />} >
                            <Route path="/games/create" element={<GameCreate />} />
                            <Route path={Path.GameEdit} element={<GameEdit />}/>
                            <Route path={Path.Logout} element={<Logout />}/>
                        </Route>
                    </Routes>


                </div>
            </AuthProvider>
        </ErrorBoundary>
    )
}

export default App
