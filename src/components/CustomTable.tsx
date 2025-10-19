import { Table, type TableColumnsType, type TableProps } from 'antd';

interface CustomTableProps<T extends Record<string, unknown>>
  extends Omit<TableProps<T>, 'columns' | 'dataSource'> {
  data: T[];
  columns: TableColumnsType<T>;
  loading?: boolean;
  hasPagination?: boolean;
}

const CustomTable = <T extends Record<string, unknown>>({
  data,
  columns,
  loading = false,
  hasPagination = true,
  ...tableProps
}: CustomTableProps<T>) => {
  return (
    <Table<T>
      columns={columns}
      dataSource={data}
      loading={loading}
      rowKey='id'
      scroll={{ x: 800, y: 400 }}
      pagination={
        hasPagination
          ? {
              pageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total, range) =>
                `${range[0]}-${range[1]} of ${total} items`,
            }
          : false
      }
      size='small'
      bordered
      {...tableProps}
    />
  );
};

export default CustomTable;
