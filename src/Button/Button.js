import './Button.css'

export default function Button({ title, onClick, disabled, className }) {
  return (
    <button disabled={disabled} className={className} onClick={onClick}>
      {title}
    </button>
  )
}