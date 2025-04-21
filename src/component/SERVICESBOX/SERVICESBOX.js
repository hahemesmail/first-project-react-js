import "./SERVICESBOX.css"
export default function SERVICESBOX (props){
  return (
    <div className="box">
        <a href="#">{props.icons}</a>
        <h3>{props.h}</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, incidunt cum? Animi facilis eaque facere. Dolorum officia sunt assumenda odit voluptas mollitia eligendi illum eveniet ducimus. Consequuntur temporibus pariatur ex.

        </p>
        <span>{props.icspan}</span>
    </div>
  )
}