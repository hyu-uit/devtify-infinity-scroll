import CustomTable from '../../components/CustomTable';
import { useDummy } from '../../api/dummy/useDummy';
import DummyColumns from './columns/dummy.columns';

const DummyPage = () => {
  const { data, isLoading, error } = useDummy();

  if (error) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Error loading data</h2>
        <p style={{ color: 'red' }}>
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
        hasPagination={true}
      />
    </div>
  );
};

export default DummyPage;
