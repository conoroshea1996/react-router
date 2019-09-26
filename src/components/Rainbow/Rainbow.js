import React from 'react';

function Rainbow(WrappedComponent) {

    const colors = ['red', 'blue', 'green', 'yellow', 'pink']
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const colorClass = `${randomColor}-text`;
    return (props) => {
        return (
            <div className={colorClass}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow;
