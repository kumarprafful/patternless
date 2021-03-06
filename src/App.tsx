import Button from "./components/Button";
import Input from "./components/Input";

function App() {
    return (
        <div
            style={{
                // background: 'rgb(47 116 192)',
                height: '100vh',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                width: '20%',
            }}
        >
            <Button
                raise
            >
                Click me please
            </Button>
            <br />
            <Button>
                Hello
            </Button>
            <br />
            <Input
                placeholder="Input"
                error="This field is required."
            />
            <br />
        </div>
    );
}

export default App;
