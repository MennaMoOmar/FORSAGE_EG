import NavBar from "../shared/navbar";
import AddProductForm from "./addproductform";
import ActionHeader from "./ActionHeader";
import Footer from "../shared/footer";
import { useParams } from "react-router";

const Admin = (props) => {
  const { id } = useParams();

  return (
    <>
      <div className="Admin__homepage">
        <NavBar></NavBar>
        <ActionHeader action={id ? "edit" : "add"} />
        <AddProductForm id={id} />
        <Footer />
      </div>
    </>
  );
};

export default Admin;
