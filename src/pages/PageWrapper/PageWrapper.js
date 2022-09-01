

export default function PageWrapper(props){
    return (
        <div className="container mx-auto">
            {props.children}
        </div>
    )
}