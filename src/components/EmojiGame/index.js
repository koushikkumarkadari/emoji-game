/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

let score = 0
let highScore = 0
class EmojiGame extends Component {
  state = {isGameOver: false, continEmojisList: []}

  onShuffling = each => {
    const {continEmojisList} = this.state
    if (continEmojisList.includes(each)) {
      this.setState(prevState => ({isGameOver: !prevState.isGameOver}))
    } else {
      score += 1
      this.setState(prevState => ({
        continEmojisList: [...prevState.continEmojisList, each],
      }))
    }
    if (score === 12) {
      this.setState(prevState => ({isGameOver: !prevState.isGameOver}))
    }
  }

  onRestart = () => {
    if (highScore < score) {
      highScore = score
    }
    this.setState(prevState => ({
      isGameOver: !prevState.isGameOver,
      continEmojisList: [],
    }))
    score = 0
  }

  render() {
    const {emojisList} = this.props
    emojisList.sort(() => Math.random() - 0.5)

    const {isGameOver} = this.state
    return (
      <div className="background-container">
        <NavBar isGameOver={isGameOver} score={score} highScore={highScore} />

        {!isGameOver && (
          <div className="inner-background-container">
            <ul className="un-ordered-list">
              {emojisList.map(each => (
                <EmojiCard
                  key={each.id}
                  shuffling={this.onShuffling}
                  each={each}
                />
              ))}
            </ul>
          </div>
        )}

        {isGameOver && (
          <WinOrLoseCard onRestart={this.onRestart} score={score} />
        )}
      </div>
    )
  }
}
export default EmojiGame
