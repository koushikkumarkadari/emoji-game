import './index.css'

const NavBar = props => {
  const {score, highScore, isGameOver} = props
  return (
    <nav>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {!isGameOver && (
        <div>
          <p>Score: {score}</p>
          <p>Top Score: {highScore}</p>
        </div>
      )}
    </nav>
  )
}
export default NavBar
