function Card({ 
    theme = 'light', 
    title = 'Light', 
    cardVariant = 'tw'
  }) {
  return (
    <div className={`theme ${theme}`}>
      <div className={`py-10 p-6 background--${cardVariant}`}>
        <div className={`card card--${cardVariant}`}>
          <h1 className={`mb-2 text-gray-500 heading--${cardVariant}`}>{title}</h1>
          <p>
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
