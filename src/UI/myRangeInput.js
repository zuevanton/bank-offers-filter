const MyRangeInput = ({title, min, max, buttons, unit, onChange, value}) => {

  return (
    <div className="my-input">
      <h3>{title}</h3>
      <div className="inputs">
        <input type="text" value={value} onChange={e => onChange(+e.target.value)} />
        <input type="range" min={min} max={max} value={value} onChange={e => onChange(+e.target.value)} />
      </div>
      <div className="buttons">
        {buttons.map(value => {
          return (
            <button 
              key={value} 
              type="button" 
              onClick={() => onChange(value)} 
            >
                {value} {unit}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default MyRangeInput