import { useEffect, useState } from 'react';

function FilterData() {
  const tableData = [
    {
      name: 'One',
      status: 'On',
      state: 'Running',
    },
    {
      name: 'Two',
      status: 'Still',
      state: 'Closed',
    },
    {
      name: 'Three',
      status: 'Wait',
      state: 'Differed',
    },
    {
      name: 'Four',
      status: 'On',
      state: 'Running',
    },
    {
      name: 'Five',
      status: 'Suspended',
      state: 'Closed',
    },
  ];
  let stateList = ['All State'];
  tableData.forEach((val) => {
    stateList.push(val.state);
  });
  stateList = stateList.filter(
    (val, index) => stateList.indexOf(val) === index
  );
  const [selectedState, setSelectedState] = useState(stateList[0]);
  const [filteredTable, setFilteredTable] = useState(tableData);
  useEffect(() => {
    if (selectedState === 'All State') {
      setFilteredTable(tableData);
    } else {
      const filtered = tableData.filter((val) => val.state === selectedState);
      setFilteredTable(filtered);
    }
  }, [selectedState]);

  return (
    <div>
      <h1>Table Filter</h1>
      {/* Input Field */}
      <select
        name='cars'
        id='cars'
        form='carform'
        onChange={(evt) => {
          setSelectedState(evt.target.value);
        }}
      >
        {stateList.map((val) => (
          <option value={val}>{val}</option>
        ))}
      </select>
      <h2>{selectedState}</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>State</th>
        </tr>
        {filteredTable.map((val) => {
          return (
            <tr>
              <td>{val.name}</td>
              <td>{val.status}</td>
              <td>{val.state}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default FilterData;
