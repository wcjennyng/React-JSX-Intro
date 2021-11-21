//props include:
//username of the user who wrote the tweet, the name of the user who wrote the tweet
//the date of the tweet
//the message being tweeted

const Tweet = (props) => {
    return (
        <div className="tweet">
            <span>{props.name} - @{props.username} on {props.date}</span>
            
            <p>{props.message}</p>
        </div>
    )
}