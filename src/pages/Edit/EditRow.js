import { Footer } from "flowbite-react";

export default function EditRow(props) {
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
