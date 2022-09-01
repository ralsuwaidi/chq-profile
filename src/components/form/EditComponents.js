import InputItem from "./FormComponents";

export default function EditText(){
    return (
        <div className="md:flex justify-between ">
            <div className="basis-1/4">
                <p>component name</p>
            </div>
            <div className="basis-2/4">
                <InputItem type="email" placeholder="email" />
            </div>
        </div>
    )
}