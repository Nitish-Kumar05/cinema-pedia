import React from 'react'

const AppTitle = ({ title = "TV-Pedia", subtitle = "All your cinema in one place" }) => {
    return (
        <>
            <h1>
                {title}
            </h1>

            <p>
                {subtitle}
            </p>
        </>
    )
}

export default AppTitle