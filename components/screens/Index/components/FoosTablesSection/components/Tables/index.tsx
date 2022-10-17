import Table from "../Table";

const Tables = ({tables}) => {
  return (
    <div>
      {tables.map((table) => (
        <Table key={table.key} table={table} />
      ))}
    </div>
  );
};

export default Tables;
