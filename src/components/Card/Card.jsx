import Tag from "../Tag/Tag";
import "./Card.css"

export default function Card(props) {
  const item = props.item

  const tags = [
    `Status: ${item.status}`,
    `Species: ${item.species}`,
    `Origin: ${item.origin.name}`,
  ]

  return <div className="card">
    <h2>{item.name}</h2>

    <div className="tags">
      {tags.map(function (tag, index) {
        return <Tag text={tag} key={`card_tag_${index}`} />
      })}
    </div>

    <img src={item.image} />
  </div>
}
