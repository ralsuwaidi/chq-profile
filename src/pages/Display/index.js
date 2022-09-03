import { useAsyncStuff } from "../../context/UserGet";

export default function Display() {
  const { data, error, loaded } = useAsyncStuff();

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
