interface Props {
  label: string
  type: string
  placeholder: string
}

function InputField({
  label,
  type,
  placeholder
}: Props) {
  return (
    <div className="input-group">

      <label>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
      />

    </div>
  )
}

export default InputField