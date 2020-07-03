import React from "react";
import { useTable, useSortBy } from "react-table";
import funcs from "./makeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

export default function STMem() {
  const columns = React.useMemo(
    () =>
      funcs.makeHeader([
        "#",
        "Action",
        "Priority",
        "By",
        "Department",
        "Status",
        "Confirm"
      ]),
    []
  );
  // console.log(columns)
  const data = React.useMemo(
    () =>
      funcs.makeDataMem([
        "id",
        "Action",
        "Priority",
        "By",
        "Department",
        "Status",
        "Confirm"
      ]),
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns: columns,
      data: data,
    },
    useSortBy
  );

  return (
    <>
      <table {...getTableProps()} className="table table-sm">
        <thead className="thead-dark">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(
                    column.getSortByToggleProps(column.getSortByToggleProps())
                  )}
                  classNAme="sort-by"
                >
                  {column.render("Header")}
                  <FontAwesomeIcon icon={faSort} className="text-right" />
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      class={
                        cell.column.id == "col6"
                          ? cell.value == "Confirmed"
                            ? "text-success"
                            : ""
                          : ""
                      }
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
