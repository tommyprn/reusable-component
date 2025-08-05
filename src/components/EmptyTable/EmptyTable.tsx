interface EmptyTableProps {
  text: string;
}
const EmptyTable = ({ text }: EmptyTableProps) => {
  return (
    <div className='min-h-30 pointer-events-none flex flex-col items-center justify-center p-9'>
      <div className='flex flex-col items-center gap-1 font-medium'>
        <p className='text-neutral-500'>{text}</p>
      </div>
    </div>
  );
};

export default EmptyTable;
