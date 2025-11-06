export default function App() {
    let state = "Yes"
    
    function handleClick() {
        state = "Heck yes"
    }
    
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button onClick={handleClick} className="value">{state}</button>
        </main>
    )
}

