import {
  Avatar,
  Checkbox,
  Footer,
  Label,
  Textarea,
  TextInput,
} from "flowbite-react";
import React from "react";
import FormMain from "./FormMain";

export default function EditForm() {
  return (
    <form>
      <div className="mt-5">
       <FormMain/>

        <EditRow label="Last Name">
          <TextInput
            id="lastName"
            type="text"
            placeholder="Suwaidi"
            required={true}
          />
        </EditRow>

        <EditRow label="Your Bio">
          <Textarea
            id="bio"
            placeholder="Tell us about yourself"
            required={true}
            rows={4}
          />
        </EditRow>
        <EditRow label="Github Profile">
          <TextInput
            id="github"
            type="url"
            placeholder="Coders-HQ"
            addon="github.com/"
          />
        </EditRow>
        <EditRow label="Github Profile">
          <TextInput
            id="github"
            type="url"
            placeholder="Coders-HQ"
            addon="github.com/"
          />
        </EditRow>
        <EditRow label="Github Profile">
          <TextInput
            id="github"
            type="url"
            placeholder="Coders-HQ"
            addon="github.com/"
          />
        </EditRow>
        <EditRow label="Your Bio">
          <Textarea
            id="bio"
            placeholder="Tell us about yourself"
            required={true}
            rows={4}
          />
        </EditRow>
        <EditRow label="Github Profile">
          <TextInput
            id="github"
            type="url"
            placeholder="Coders-HQ"
            addon="github.com/"
          />
        </EditRow>
      </div>
    </form>
  );
}

export function EditRow(props) {
  return (
    <div className="my-5">
      <div className={`grid grid-cols-8 gap-4  ${props.spacing}`}>
        <div className="col-start-1 col-span-2">
          <p className="text-xl font-semibold">{props.label}</p>
          <p className="text-sm text-gray-500 ">{props.info}</p>
        </div>
        <div className="col-end-7 col-span-4 max-w-md">{props.children}</div>
      </div>
      <Footer.Divider />
    </div>
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
