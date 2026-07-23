function Sidebar() {
  return (
    <aside
      style={{
        width: "200px",
        backgroundColor: "#f1f1f1",
        padding: "15px",
        minHeight: "400px",
      }}
    >
      <h3>Menu</h3>

      <ul>
        <li>Home</li>
        <li>Students</li>
        <li>Courses</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
}

export default Sidebar;