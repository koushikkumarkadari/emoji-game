import './index.css'

const WinOrLoseCard = props => {
  const {score, onRestart} = props
  return (
    <div>
      <div>
        <h1>score</h1>
        <h1>{`${score}/12`}</h1>
        <button type="button" onClick={onRestart}>
          Play Again!
        </button>
      </div>
    </div>
  )
}
export default WinOrLoseCard
