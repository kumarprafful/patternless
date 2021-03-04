import Button from "./components/Button";

function App() {
    return (
        <div
            style={{
                background: 'rgb(126 126 126)',
                height: '100vh',
                padding: '20px',
            }}
        >
            <Button
                // background="#fff"
                // color="#000"
                // borderColor="#000"
                // outline
                round
                raise
            >
                Click me please
            </Button>
        </div>
    );
}

export default App;
