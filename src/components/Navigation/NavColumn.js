import { ListGroup } from "flowbite-react";

export default function NavColumns() {
  return (
    <div>
      <div className="w-36">
        <ListGroup>
          <ListGroup.Item>Profile</ListGroup.Item>
          <ListGroup.Item>Settings</ListGroup.Item>
          <ListGroup.Item>Messages</ListGroup.Item>
          <ListGroup.Item>Download</ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}
