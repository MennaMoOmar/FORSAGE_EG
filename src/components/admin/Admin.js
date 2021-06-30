import AdminNav from "./adminNavBar";
import AddProductForm from "./addproductform";
import Footer from "../shared/footer";
const Admin = () => {
  return (
    <>
      <div className="Admin__homepage">
        <AdminNav />
        <AddProductForm />
        <Footer />
      </div>
    </>
  );
};

export default Admin;
