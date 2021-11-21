const App = () => {
    return (
        <div>
            <Person
                name="Jenny"
                age={25}
                hobbies={["bowling", "badminton", "coding"]}
            />
            <Person
                name="Stephanie"
                age={17}
                hobbies={["ice skating", "making videos"]}
            />
            <Person
                name="Bob"
                age={50}
                hobbies={["golf", "cooking", "axe throwing"]}
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))