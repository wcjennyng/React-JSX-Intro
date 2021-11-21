//renders a div with instances of the other two components

const App = () => {
    return ( <div>
        <FirstComponent />
        <NamedComponent name="Jenny" />
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))