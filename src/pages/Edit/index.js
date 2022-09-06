import NavBar from "../../components/navigation/NavBar";
import PageWrapper from "../../components/ui/PageWrapper";
import EditForm from "./EditForm";

export default function EditPage() {
  return (
    <div>
      <NavBar />
      <PageWrapper>
           <EditForm/>
      </PageWrapper>
    </div>
  );
}
