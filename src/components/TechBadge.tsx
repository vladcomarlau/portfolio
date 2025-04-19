export default function TechBadge(props:any) {
    const url = "/badges/" + props.name + ".svg";
    const classNames = props.className ?? "" + "inline m-1"
    return (
        <img className={classNames} src={url}/>
    )
}