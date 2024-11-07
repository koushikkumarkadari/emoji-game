import './index.css'

const EmojiCard = props => {
  const {each, shuffling} = props
  const {emojiName, emojiUrl} = each

  const onAdd = () => {
    shuffling(each)
  }

  return (
    <button onClick={onAdd} type="button">
      <img src={emojiUrl} alt={emojiName} />
    </button>
  )
}
export default EmojiCard
