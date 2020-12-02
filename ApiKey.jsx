import React, {useState} from 'react';

const ApiComponent = () => {
    
    const [apiKey, setApiKey] = useState("");

    const updateApi =(event) => {
        event.preventDefault();
        setApiKey(event.target.value);
    }
}

export default ApiComponent;
