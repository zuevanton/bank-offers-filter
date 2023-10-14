const MyRadioButton = ({title, values, value, onChange, inputTitles}) => {
  
  return (
    <div>
      {title}
      {
        values.map(checkbox => {
          return (
            <label key={checkbox}>
              <input type='radio' checked={checkbox === value} onChange={() => onChange(checkbox)} />
              {inputTitles[checkbox]}
            </label>
          )
        })
      }
    </div>
  )
}

export default MyRadioButton