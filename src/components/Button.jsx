const Button = ({ label, iconUrl, backgroundColor, textColor, borderColor, fullWidth, mouseHover }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border rounded-full font-montserrat text-lg leading-none 
    ${backgroundColor
    ? `${backgroundColor} ${textColor} ${borderColor} ${mouseHover}`
    : "bg-coral-red text-white border-coral-red hover:opacity-85"}
    ${fullWidth && 'w-full'}`}>
        {label}
        {iconUrl && <img 
        src={iconUrl} 
        alt="arrow icon" 
        className="ml-2 rounded-full w-5 h-5"
        />}
    </button>
  )
}

export default Button