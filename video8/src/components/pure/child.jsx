import React, {useRef} from 'react';

const Child = ({ envio }) => {

    const refInput = useRef('')

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleButton() {
        envio(refInput.current.value);
    }
 
    return (
        <div>
            <h2>titulo</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <input placeholder='name' ref={refInput}></input>
                    <button onClick={()=> handleButton()}>otro</button>
                    <button type='submit'>enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
