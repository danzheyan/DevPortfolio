import React from 'react'

export const Button = ( {text, className, id}) => {
  return (
    // if classname exists render, else render empty string
    <a className={`${className ?? ""} cta-wrapper`}>
        {/* <button className="cta-button" */}
        <div className="cta-button group">
            <div className="bg-circle" />
            <p className="text">{text}</p>
            <div className="arrow-wrapper">
                <img src="/images/arrow-down.svg" alt="arrow" />
            </div>

        </div>
    </a>
  )
}
