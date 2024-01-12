import { useState } from "react";

export default function usePersistedState (key, defaultValue) {
    const [state, setState] = useState(() => {
        const persistantState = localStorage.getItem(key);

        if (persistantState) {
            return JSON.parse(persistantState);
        }

        return defaultValue;
    });

    const setPersistantState = (value) => {
        let serializedValue;
        setState(value);

        if (typeof value === 'function') {
            serializedValue = JSON.stringify(value(state));
        }else {
            serializedValue = JSON.stringify(value);
        }

        localStorage.setItem(key, serializedValue)
    }

    return (
        [state, setPersistantState]
    );
}