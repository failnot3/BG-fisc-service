import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Ном. на договор', width: 55 },
  { field: 'companyName', headerName: 'Име на фирмата', width: 240 },
  { field: 'fiscalDevice', headerName: 'Фискално Устройство', width: 155 },
  {
    field: 'companyOwner',
    headerName: 'Собственик на фирмата',
    width: 175,
  },
];

const rows = [
  { id: 1, companyName: 'Петър Иванов ЕТ', fiscalDevice: 'Daisy FX 1300', companyOwner: "Петър Иванов" },
  { id: 2, companyName: 'Ланкастър ЕООД', fiscalDevice: 'Datecs 150', companyOwner: "Никола Неделчев" },
  { id: 3, companyName: 'Бер-Хелла Термоконтрол ЕООД', fiscalDevice: 'Eltrade A3', companyOwner: "Ивелина Господинова" },
  { id: 4, companyName: 'Нова Фирма ЕООД', fiscalDevice: 'Eltrade A1', companyOwner: "Петър Берон" },
  { id: 5, companyName: 'Тестова Фирма АД', fiscalDevice: 'ZIT B20', companyOwner: "Иван Петров" },
  { id: 6, companyName: 'Тестова Фирма АД', fiscalDevice: 'ZIT B30', companyOwner: "Димитър Господинов" },
  { id: 7, companyName: 'Пробна Фирма ЕООД', fiscalDevice: 'Eltrade B1', companyOwner: "Георги Димитров" },
  { id: 8, companyName: 'Демо Фирма ЕООД', fiscalDevice: 'Datecs 25x', companyOwner: "Николай Василев" },
  { id: 9, companyName: 'Микроинвест ООД', fiscalDevice: 'Daisy Compact M 02', companyOwner: "Ивелин Благоев" },
  { id: 10, companyName: 'ЕЛ БАТ АД', fiscalDevice: 'Daisy Compact S', companyOwner: "Здравко Правков" },
  { id: 11, companyName: 'БОНИКО - 72 ЕООД', fiscalDevice: 'Daisy Expert SX', companyOwner: "Симона Великова" },
];

export default function EnhancedTable() {
  return (
    <div style={{ height: 630, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
