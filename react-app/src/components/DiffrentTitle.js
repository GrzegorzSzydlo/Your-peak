import React from 'react'

function Title1({ title }) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bolt">
                    <strong className=" text-blue">{title}
                    </strong>
                </h1>
            </div>
        </div>
    )
}

function Title2({ title }) {
    return (
        <div className="row">
            <div className="col-10 mx-auto pt-1 my-2 text-center text-title">
                <h4 className="text-capitalize 2rem">
                    {title}
                </h4>
            </div>
        </div>
    )
}

export { Title1, Title2 };