import { useMemo, useCallback, type UIEvent } from 'react';
import { Table, type TableColumnsType, type TableProps } from 'antd';

interface CustomTableProps<T extends Record<string, unknown>>
  extends Omit<TableProps<T>, 'columns' | 'dataSource'> {
  data: T[];
  columns: TableColumnsType<T>;
  loading?: boolean;
  hasPagination?: boolean;
  hasSerial?: boolean;
  hasInfiniteScroll?: boolean;
  hasMore?: boolean;
  onLoadMore?: () => void;
  totalItems?: number;
  loadedItems?: number;
}

const CustomTable = <T extends Record<string, unknown>>({
  data,
  columns,
  loading = false,
  hasPagination = true,
  hasSerial = false,
  hasInfiniteScroll = false,
  hasMore = false,
  onLoadMore,
  totalItems = 0,
  loadedItems = 0,
  ...tableProps
}: CustomTableProps<T>) => {
  const serialColumn = useMemo(
    () => ({
      title: '#',
      key: 'serial',
      width: 60,
      align: 'center' as const,
      render: (_: unknown, __: unknown, index: number) => index + 1,
    }),
    []
  );

  const finalColumns = useMemo(
    () => (hasSerial ? [serialColumn, ...columns] : columns),
    [hasSerial, serialColumn, columns]
  );

  const handleScroll = useCallback(
    (e: UIEvent<HTMLDivElement>) => {
      if (!hasInfiniteScroll || !hasMore || !onLoadMore) return;

      const { target } = e;
      const element = target as HTMLDivElement;
      const { scrollTop, scrollHeight, clientHeight } = element;

      if (scrollTop + clientHeight >= scrollHeight - 100) {
        onLoadMore();
      }
    },
    [hasInfiniteScroll, hasMore, onLoadMore]
  );

  return (
    <div>
      <Table<T>
        columns={finalColumns}
        dataSource={data}
        loading={loading}
        rowKey='id'
        scroll={{ x: 800, y: 'calc(100vh - 250px)' }}
        pagination={
          hasInfiniteScroll
            ? false
            : hasPagination
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
        onScroll={hasInfiniteScroll ? handleScroll : undefined}
        {...tableProps}
      />
      {hasInfiniteScroll && (
        <div className='text-center p-4 text-gray-600'>
          {hasMore ? (
            <span>
              ({loadedItems} of {totalItems})
            </span>
          ) : (
            <span>All items loaded ({totalItems} total)</span>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomTable;
