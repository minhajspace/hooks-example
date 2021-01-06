import React from 'react'

const Title = () => {
    console.log('title compoent')
    return (
        <div>
            <h1>useCallback Hooks</h1>
        </div>
    )
}

export default React.memo(Title)
