import { ReactNode, useState } from "react";
import styles from "./table.module.scss";

interface DataTableProps {
  headers: ReactNode[];
  data: ReactNode[][];
  paginator: boolean;
  pageSize: number;
}

export const DataTable = ({
  headers,
  data,
  paginator,
  pageSize,
}: DataTableProps) => {
  const [pagedData, setPagedData] = useState([]);
  return (
    <div className={styles.LTable}>
      <table data-border="0" cellPadding="0" cellSpacing="0">
        <thead>
          <tr className={styles.tableHead}>
            {headers.map((item: any, i: number) => (
              <th key={i}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginator
            ? pagedData.map((group: Array<any>, j: number) => (
                <tr key={j}>
                  {group.map((item: any, i: number) => (
                    <td key={i}>{item}</td>
                  ))}
                </tr>
              ))
            : data.map((group: Array<any>, j: number) => (
                <tr key={j}>
                  {group.map((item: any, i: number) => (
                    <td key={i}>{item}</td>
                  ))}
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};
