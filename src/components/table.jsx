const Table = ({ users }) => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>e-mail</th>
            <th>Company</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={user.id}>
              <td>{i + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.company.name}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;