
const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Header />
      <div className="container-children-admin">
        { children }
      </div>
    </div>
  )
}

export default AdminLayout
