import React, { memo } from 'react';
function Title() {
    console.log('Title component rendered');
    return <h2>useCallback Hook Tutorial</h2>
}
export default memo(Title);