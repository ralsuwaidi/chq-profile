import NavBar from "../../components/navigation/NavBar";
import NavColumns from "../../components/navigation/NavColumn";
import PageWrapper from "../../components/ui/PageWrapper";
import EditForm from "./EditForm";

export default function EditPage() {
  return (
    <div>
      <NavBar />
      <PageWrapper>
        <div className="">
          <div className="">
           <EditForm/>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}
