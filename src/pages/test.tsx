import {useState} from 'react';

export default function Test() {
    const [type, setType] = useState('');

    const handleSubmit = async (event) => {
        const val = event.target.value

        setType(val);
    }

    return (
        <div>
            <input type="text" value={type} onChange={handleSubmit}/>
            {type == "hi" && (
                <>
                <p>this is after hi</p>
                </>
            )}
            {type != "hi" && (
                <p>nothing happened</p>
            )}
            <button onClick={handleSubmit}>click</button>
        </div>
    )
}