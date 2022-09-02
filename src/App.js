import "./App.css";
import EditPage from "./pages/EditPage/EditPage";
import PageWrapper from "./pages/PageWrapper/PageWrapper";

function App() {
  return (
    <div className="font-sans ">
    <PageWrapper>
      <EditPage />
    </PageWrapper>
    </div>
  );
}

export default App;
