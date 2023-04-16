

import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small';


const heavyStuff = (iteratiuonNumber = 100) => {

    for(let a = 0; a <= iteratiuonNumber; a ++){
        console.log("Ahi vamos !!!");
    };

    return `Me renderice ${iteratiuonNumber} veces`;
};

export const MemoHook = () => {

    const {counter, increment} = useCounter(4000);
    const [show, setShow] = useState(true);

    const messageMemorized = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>
            <h1>Counter <Small value={counter}/> </h1>
            <hr />

            <h4>{messageMemorized}</h4>

            <button
                className='btn btn-primary'
                onClick={() => increment()}
            >
                +1
            </button>

            <button
                className='btn btn-secondary'
                onClick={() => setShow(!show)}
            >
                Show/hide {JSON.stringify(show)}
            </button>
        </>
    )
}
