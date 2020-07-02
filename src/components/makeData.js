import { ACTIONS } from "../shared/actions"

const makeHeader = (headers) => {
  const columns = []
  headers.forEach((header, index) => {
    columns.push({ Header: header, accessor: "col" + (parseInt(index) + 1) })
  })

  return columns
}

const makeData = (headers) => {
  const data = []

  ACTIONS.forEach(act => {
    let row = {}
    headers.forEach((header, index) => {
      let headerName = header.toLowerCase()
      let colName = "col" + (index + 1)
      header == "Confirm" ?
        row[colName] = act[headerName] ? "Confirmed" : "Not Confirmed"
      :
        row[colName] = act[headerName]
    })
    data.push(row)
  })

  return data
}

const funcs = {
    makeHeader,
    makeData
}

export default funcs