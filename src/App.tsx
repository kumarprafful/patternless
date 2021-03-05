import Button from "./components/Button";

function App() {
    return (
        <div
            style={{
                // background: 'rgb(47 116 192)',
                height: '100vh',
                padding: '20px',
            }}
        >
            <Button
                raise
            >
                Click me please
            </Button><br /><br />
            <Button
                outline
            >
                Hello
            </Button>
        </div>
    );
}

export default App;
