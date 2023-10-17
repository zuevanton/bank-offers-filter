const MyCheckBox = ({title, values, inputTitles, active, onChange}) => {
  const handler = (value) => {
    if(active.includes(value)) {
      onChange(prev => prev.filter(item => item !== value))
    } else {
      onChange(prev => [...prev, value])
    }
  }
  return (
    <div>
      <h3>{title}</h3>
      {
        values.map(checkboxValue => {
          return (
            <label key={checkboxValue} className="label-checkbox">
              <input 
                type="checkbox" 
                name={checkboxValue} 
                checked={active.includes(checkboxValue)}
                onChange={() => handler(checkboxValue)}
               />
              <span>{inputTitles[checkboxValue]}</span>
            </label>
          )
        })
      }
    </div>
  )
}

export default MyCheckBox