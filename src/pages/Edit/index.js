import NavBar from "../../components/navigation/NavBar";
import NavColumns from "../../components/navigation/NavColumn";
import PageWrapper from "../PageWrapper/PageWrapper";
import EditForm from "./EditForm";

export default function EditPage() {
  return (
    <div>
      <NavBar />
      <PageWrapper>
        <div className="flex">
          <div className="mr-12 mt-5">
            <NavColumns />
          </div>
          <div className="grow">
           <EditForm/>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}
