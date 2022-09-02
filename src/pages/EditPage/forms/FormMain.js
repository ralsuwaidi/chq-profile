import {
    Checkbox,
    Label,
    Textarea,
    TextInput,
  } from "flowbite-react";
import React from "react";
import EditRow from "./EditRow";

export default function FormMain() {
    return (
        <EditRow
        label="Main Settings"
        info="This information will appear on your profile "
      >
        <div className="flex">
          <div className="flex-grow">
            <div className="mb-2">
              <Label htmlFor="firstName" value="First name" />
            </div>
            <TextInput
              id="firstName"
              type="text"
              placeholder="Rashed"
              required={true}
            />
          </div>
          <div className="flex-grow px-5">
            <div className="mb-2">
              <Label htmlFor="lastName" value="Last name" />
            </div>
            <TextInput
              id="lastName"
              type="text"
              placeholder="Rashed"
              required={true}
            />
          </div>
        </div>

        <div className="mt-5">
          <div className="mb-2">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="name@codershq.ae"
            helperText={
              <React.Fragment>We’ll never share your details</React.Fragment>
            }
          />
        </div>

        <div className="mt-5">
          <div className="mb-2">
            <Label htmlFor="linkedin" value="Linkedin profile" />
          </div>
          <TextInput
            id="linkedin"
            type="text"
            placeholder="Linkedin"
            addon="linkedin.com/in/"
          />
        </div>

        <div className="mt-5">
          <div className="mb-2">
            <Label htmlFor="website" value="Website url" />
          </div>
          <TextInput
            id="website"
            type="text"
            placeholder="website.com"
            addon="https://"
          />
        </div>

        <div className="mt-5">
          <div className="mb-2">
            <Label htmlFor="bio" value="Bio" />
          </div>
          <Textarea
            id="bio"
            rows="4"
            helperText={
              <React.Fragment>
                Tell us about yourself in fewer than 250 characters.{" "}
              </React.Fragment>
            }
          />
        </div>

        <div className="flex items-center gap-2 mt-5">
          <Checkbox id="currentlyEmployed" />
          <Label htmlFor="currentlyEmployed">Currently Employed?</Label>
        </div>
      </EditRow>
    )
}