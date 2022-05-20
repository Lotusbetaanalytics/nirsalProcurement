import React from 'react'

const Button = ({ onClick, type = "submit", title, disabled = false, loading = false, isFullWidth = false, size = "medium", Icon, color = "lightGreen" }) => {
    return <div className={isFullWidth ? `nirsal__InputContainer ${size}` : `btnContainer ${size}`}>
        <button type={type} onClick={onClick} disabled={disabled || loading} className={`btn ${color}`}>
            {title} {Icon && <Icon />} {loading && <span className='loading'></span>}
        </button>
    </div>
}

export default Button