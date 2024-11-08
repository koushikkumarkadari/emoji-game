import './index.css'

const EmojiCard = props => {
  const {each, shuffling} = props
  const {emojiName, emojiUrl} = each

  const onAdd = () => {
    shuffling(each)
  }

  return (
    <li>
      <button className="emoji-card-buttton" onClick={onAdd} type="button">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
