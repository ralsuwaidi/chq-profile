import { Avatar, Footer, TextInput } from "flowbite-react";

export default function EditPage() {
  return (
    <div>
      <div className="flex items-center   my-10">
        <div className="">
          <Avatar
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded={true}
            bordered={true}
            size="xl"
          />
        </div>
        <div className=" px-5">
          <p className="text-2xl font-semibold">Profile</p>
          <p className="text-sm text-gray-500">Update your personal details</p>
        </div>
      </div>

      <div className="mt-5">
        <EditRow name="First name">
          <TextInput id="firstName" type="text" required={true} />
        </EditRow>
        <EditRow name="Last Name">
          <TextInput id="lastName" type="text" required={true} />
        </EditRow>
      </div>
    </div>
  );
}

export function EditRow(props) {
  return (
    <div className="my-5">
      <div className="grid grid-cols-8 gap-4">
        <div className="col-start-1 col-span-2">
          <p className="text-sm">{props.name}</p>
        </div>
        <div className="col-end-7 col-span-4">
          {props.children}
        </div>
      </div>
      <Footer.Divider />
    </div>
  )
}