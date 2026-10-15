import React, { memo } from 'react';

function ShowCount({ count, title }) {
    console.log(`Rendering ${title}`);
    return (
        <p>{title} is {count}</p>
    );
}
export default memo(ShowCount);