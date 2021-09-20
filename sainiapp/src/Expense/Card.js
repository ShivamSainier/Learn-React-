import "./Card.css"

function Card(props) {
    return (
        <div className={props.data}>
            {props.children}
        </div>
    )
}

export default Card
