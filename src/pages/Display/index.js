import { useAxios } from "../../context/UserGet";

export default function Display() {
  const { cancel, data, error, loaded } = useAxios(
    "/users/8",
    "get"
  );

  if (loaded) {
    return error ? (
      <span>Error: {error}</span>
    ) : (
      <DisplayUser user={data.data} />
    );
  }

  return <span>Loading...</span>;
}

export function DisplayUser(props) {
  return <p>id {props.user.id}</p>;
}
