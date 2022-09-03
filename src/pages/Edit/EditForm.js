import { Avatar, Button, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import EditRow from "./EditRow";
import FormMain from './FormMain'


export default function EditForm() {
  let { editUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  return (
    <form onSubmit={editUser}>
      <div className="mt-5">
        <FormMain />

        <EditRow label="Last Name">
          <TextInput
            id="lastName"
            type="text"
            placeholder="Suwaidi"
          />
        </EditRow>

        
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}



export function Header(props) {
  return (
    <div className="flex items-center my-10">
      <div>
        <Avatar
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded={true}
          bordered={true}
          size="xl"
        />
      </div>
      <div className="px-5">
        <p className="text-2xl font-semibold">Profile</p>
        <p className="text-sm text-gray-500">Update your personal details</p>
      </div>
    </div>
  );
}
