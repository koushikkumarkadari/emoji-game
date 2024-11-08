import './index.css'

const NavBar = props => {
  const {score, highScore, isGameOver} = props
  return (
    <nav className="nav-bar-background-container">
      <div className="navBar-logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {!isGameOver && (
        <div className="nav-bar-scores">
          <p className="score-in-navbar">Score: {score}</p>
          <p className="score-in-navbar">Top Score: {highScore}</p>
        </div>
      )}
    </nav>
  )
}
export default NavBar
