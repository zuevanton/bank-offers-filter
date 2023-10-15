const MyRadioButton = ({title, values, value, onChange, inputTitles}) => {
  
  return (
    <div>
      <h3>{title}</h3>
      {
        values.map(radio => {
          return (
            <label key={radio} style={{display: 'block'}}>
              <input type='radio' checked={radio === value} onChange={() => onChange(radio)} />
              {inputTitles[radio]}
            </label>
          )
        })
      }
    </div>
  )
}

export default MyRadioButton