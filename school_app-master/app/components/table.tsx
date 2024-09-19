import React from "react";

interface ColumnData {
  id: number;
  name: string | React.ReactNode;
  key?: string | React.ReactNode;
  classname?: string;
}

interface BasicTableProps {
  ColumData?: ColumnData[]; // Adjusted to accept an array of objects
  rowData: Array<{ [key: string]: any }>;
}

const BasicTable: React.FC<BasicTableProps> = ({ ColumData, rowData }) => {
  return (
    <>
      <table className="custom-table min-w-full bg-white border-0 rounded-lg">
        <thead>
          <tr className="border-b border-gray-300 rounded-lg">
            {ColumData?.map((column, index) => (
              <th
                key={column.id}
                className={`px-6 py-3 text-left font-[600] text-[#000] whitespace-nowrap ${column.classname}`}
              >
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData?.map((data, index) => {
            const row = Object.values(data);
            return (
              <tr key={index}>
                {row.map((rowDataName, colIndex) => {
                  if (Array.isArray(rowDataName)) {
                    return null;
                  }
                  return (
                    <td
                      className={`px-6 py-4 text-[#000] border-b border-gray-200 font-[600]`}
                      key={colIndex}
                    >
                      {rowDataName}
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
};

export default BasicTable;
