//renders at least 3 tweets

const App = () => {
    return (
        <div>
            <Tweet 
                name="Jenny"
                username="JennySpringboard"
                date={new Date().toDateString()}
                message="Best Bootcamp Ever!"
            />
            <Tweet 
                name="Bob"
                username="BobBobBob"
                date={new Date().toDateString()}
                message="I'm Bob"
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))