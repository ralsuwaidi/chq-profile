import { Footer } from "flowbite-react";

export default function EditRow(props) {
  return (
    <div className="my-5">
      <div className={`md:flex  ${props.spacing}`}>
        <div className="w-64 pr-10 mb-5 md:mb-0">
          <p className="text-xl font-semibold">{props.label}</p>
          <p className="text-sm text-gray-500 ">{props.info}</p>
        </div>
        <div className="md:flex-grow">
          <div className="xl:w-6/12 mx-auto md:px-0 px-2">{props.children}</div>
        </div>
      </div>
      <Footer.Divider />
    </div>
  );
}
