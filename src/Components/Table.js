import React from 'react'
import Table from 'react-bootstrap/Table';

export default function Tables({data,get}) {
    return (
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>Company</th>
      <th>Blogpost</th>
    </tr>
  </thead>
  <tbody >
{
  data.map((list)=>
  <tr key={list.id}>
  <td>{list.name}</td>
  <td>{list.company.name}</td>
  <td><span className="blog-link" onClick={()=>get(list.id)} >Blogpost</span></td>
</tr>
)
}
  </tbody>
</Table>
    )
}
