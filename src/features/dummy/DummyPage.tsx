import CustomTable from '../../components/CustomTable';
import { useDummyInfinite } from '../../api/dummy/hooks/useDummyInfinite';
import DummyColumns from './columns/dummy.columns';

const DummyPage = () => {
  const { data, isLoading, error, hasMore, loadMore, totalItems, loadedItems } =
    useDummyInfinite();

  if (error) {
    return (
      <div className='p-4 text-center'>
        <h2 className='text-2xl font-bold text-red-500 mb-2'>
          Error loading data
        </h2>
        <p className='text-red-500'>
          {error instanceof Error ? error.message : 'An error occurred'}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className='text-3xl font-bold text-blue-600 mb-4'>
        Dummy Data Table
      </h1>
      <p>Displaying data from the Microsoft Edge demo API</p>

      <CustomTable
        data={data || []}
        columns={DummyColumns()}
        loading={isLoading}
        hasPagination={false}
        hasSerial={true}
        hasInfiniteScroll={true}
        hasMore={hasMore}
        onLoadMore={loadMore}
        totalItems={totalItems}
        loadedItems={loadedItems}
      />
    </div>
  );
};

export default DummyPage;
