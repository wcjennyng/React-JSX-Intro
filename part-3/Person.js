//renders a p tag which displays “Learn some information about this person”. 
//Each person should have name and age properties.

//If over 18, display an additional h3 that says "Please go vote!"
//Otherwise, display an h3 that says "You must be 18"
//If the person's name is longer than 8 characters, only display the first 6 characters of their name

//Property called hobbies that accepts an array of hobbies (array of strings)
//should list each one of these hobbies as an li

const Person = (props) => {
    let voteAge = props.age >= 18 ? "Please go vote!" : "You must be 18"

    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>)

    return (
        <div>
            <p>Learn some information about this person:</p>
            <ul>
                <li>Name: {props.name.slice(0,6)}</li>
                <li>Age: {props.age}</li>
                <ul>Hobbies:
                    {hobbies}
                </ul>
            </ul>
            <h3>{voteAge}</h3>
        </div>
    )
}