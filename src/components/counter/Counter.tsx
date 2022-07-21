import { useState } from 'react';

export default function Counter() {

    const [count, setCount] = useState(0);
    return (
        <button
            onClick={() => setCount(c => c + 1)}
        >
            Counter - {count}
        </button>
    );
}
