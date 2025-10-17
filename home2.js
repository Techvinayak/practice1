const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [rows, setRows] = useState([]);

  const table = () => {
    if (name === "" || phone === "") {
      alert("Please fill input fields");
      return;
    }

    // Add new row
    setRows([...rows, { name, phone }]);

    // Clear inputs
    setName("");
    setPhone("");
  

  return (
    <>
      <form>
        <label>Enter your name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>Enter your mobile number: </label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </form>
      <br />
      <br />
      <button onClick={table}>Submit</button>
      <br />
      <br />
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
