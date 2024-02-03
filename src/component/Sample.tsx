type Props = {
  sum: number;
  view: boolean;
};

export const Sample = ({ sum, view }: Props) => {
  return (
    <>
      <div>{sum}</div>
      
      {view ? (
        <div>表示されているところ</div>
      ) : (
        <div>表示されていないところ</div>
      )}
    </>
  );
};
