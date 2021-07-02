const ActionHeader = ({ action }) => {
  return (
    <>
      {action === "add" && (
        <h5 className="addProduct__header">إضافة منتج جديد</h5>
      )}
      {action === "edit" && (
        <h5 className="addProduct__header">تعديل المنتج</h5>
      )}
    </>
  );
};

export default ActionHeader;
