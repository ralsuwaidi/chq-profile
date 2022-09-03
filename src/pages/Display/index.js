import { useState } from "react";
import { useAsyncStuff } from "../../context/UserGet";

export default function Display() {
  let response = useAsyncStuff();
  let user = null;

  if (response.loaded) {
    user = response.data.data;
    console.log(user.avatar)
  }
  return response.loaded ? <DisplayUser user={user} /> : <p>loading</p>;
}

export function DisplayUser(props) {
  return <p>id {props.user.id}</p>;
}
