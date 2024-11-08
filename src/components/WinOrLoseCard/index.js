import './index.css'

const WinOrLoseCard = props => {
  const {score, onRestart} = props
  const resultImage =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <div className="win-or-lose-background-container">
      <div className="win-or-lose-card-container">
        <div>
          {score === 12 && (
            <div>
              <h1 className="result">You Won</h1>
              <p className="best-score">Best Score</p>
            </div>
          )}
          {score !== 12 && (
            <div>
              <h1 className="result">You Lose</h1>
              <p className="best-score">Score</p>
            </div>
          )}
          <p className="result-text">{score}/12</p>
          <button
            className="play-again-button"
            type="button"
            onClick={onRestart}
          >
            Play Again
          </button>
        </div>

        <img src={resultImage} alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
