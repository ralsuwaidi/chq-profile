

export default function PageWrapper(props){
    return (
        <div className="md:container md:mx-auto">
            {props.children}
        </div>
    )
}