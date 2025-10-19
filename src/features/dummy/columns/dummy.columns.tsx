import type { TableColumnsType } from 'antd';
import type { DummyListDto } from '../../../api/dummy/dto/dummy.dto';
import dayjs from 'dayjs';
import { LANGUAGES } from '../../../constants/enums';

const DummyColumns = () => {
  const columns: TableColumnsType<DummyListDto> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 200,
    },
    {
      title: 'Bio',
      dataIndex: 'bio',
      key: 'bio',
      ellipsis: true,
      render: (text: string) => (
        <div className='overflow-x-auto no-scrollbar'>{text}</div>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 150,
      fixed: 'left',
    },
    {
      title: 'Language',
      dataIndex: 'language',
      key: 'language',
      width: 120,
      filters: Object.values(LANGUAGES).map((language) => ({
        text: language,
        value: language,
      })),
      onFilter: (value, record) => record.language === value,
    },
    {
      title: 'Version',
      dataIndex: 'version',
      key: 'version',
      width: 100,
      sorter: (a, b) => a.version - b.version,
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
      width: 150,
    },
    {
      title: 'Created Date',
      dataIndex: 'createdDate',
      key: 'createdDate',
      width: 200,
      sorter: (a, b) => dayjs(a.createdDate).diff(dayjs(b.createdDate)),
    },
  ];

  return columns;
};

export default DummyColumns;
