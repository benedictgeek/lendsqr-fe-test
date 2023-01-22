import { HTMLProps, ReactNode, useEffect, useState } from "react";
import Pagination from "../pagination/pagination";
import { VerticalSpacer } from "../utils";
import styles from "./table.module.scss";

interface DataTableProps {
  headers: ReactNode[];
  data: ReactNode[][];
  paginator: boolean;
}

export const DataTable = ({ headers, data, paginator }: DataTableProps) => {
  const [pagedData, setPagedData] = useState<ReactNode[][]>([]);
  const [pageSize, setPageSize] = useState(100);
  const [activePage, setActivePage] = useState(1);

  const splitTableDataIntoChunksOfArray = () => {
    let temporaryArray: any[] = [];
    for (let i = 0; i < data.length; i += pageSize) {
      let myChunk = data.slice(i, i + pageSize);
      temporaryArray.push(myChunk);
    }
    return temporaryArray;
  };

  useEffect(() => {
    let data = splitTableDataIntoChunksOfArray();
    setPagedData(data[activePage - 1]);
  }, [pageSize, activePage]);

  return (
    <>
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
      {paginator && (
        <>
          <VerticalSpacer size={10} />
          <div className={styles.paginationAndSizeContainer}>
            <SelectPageSize
              totalSize={data.length}
              onChange={(e) =>
                setPageSize(Number((e.target as HTMLSelectElement).value))
              }
            />
            <div className={styles.paginator}>
              <Pagination
                totalPages={Math.ceil(data.length / pageSize)}
                defaultActivePage={activePage}
                onChangePage={(page) => setActivePage(page)}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

interface SelectPageSizeProps extends HTMLProps<HTMLSelectElement> {
  totalSize: number;
}

const SelectPageSize = ({ totalSize, ...props }: SelectPageSizeProps) => {
  return (
    <div>
      Showing
      <select className={styles.selectSize} {...props}>
        <option value="50">50</option>
        <option value="100" selected>
          100
        </option>
        <option value="200">200</option>
      </select>
      out of {totalSize}
    </div>
  );
};
