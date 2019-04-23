import React from "react";
import Setup from "./components/Setup";
import {SetupFormProvider} from './context/setup-form';

function App() {
    return (
        <SetupFormProvider>
            <header>
                <h1>Bracketify</h1>
            </header>
            <Setup />
        </SetupFormProvider>
    );
}

export default App;
