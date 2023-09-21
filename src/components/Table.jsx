import { useId } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import {
  StyledTable,
  StyledRow,
  StyledCell,
  StyledHeader,
} from "./StyledComponent";

export default function Table({ mockDataTable, columns }) {
  const id = useId();

  const table = useReactTable({
    data: mockDataTable,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <StyledTable>
        <thead>
          {table.getHeaderGroups().map((headerGroup, index) => (
            <StyledRow key={`${id}-${index}`}>
              {headerGroup.headers.map((header, index) => (
                <StyledHeader key={`${id}-${index}`}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </StyledHeader>
              ))}
            </StyledRow>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index) => (
            <StyledRow key={`${id}-${index}`}>
              {row.getVisibleCells().map((cell, index) => {
                return (
                  <StyledCell key={`${id}-${index}`}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </StyledCell>
                );
              })}
            </StyledRow>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
}
