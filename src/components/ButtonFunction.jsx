import { memo } from 'react';
function ButtonFunction({ handleClick, children }) {
    console.log(`Rendering button - ${children}`);
    return (
        <p>
            <button type="button" onClick={handleClick}>
                {children}
            </button>
        </p>
    )
}

export default memo(ButtonFunction);