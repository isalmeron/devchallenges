import Tabs from "@/components/Tabs/Tabs";

export default function Todo() {
  return (
    <>
      <div className="container">
        <h3>#todo</h3>
        <Tabs
          tabs={['All', 'Active', 'Completed']}
          onChangeTab={(index) => { console.log(index) }}
        />
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 1rem 2rem;
            gap: 2rem;
          }
        `}
      </style>
    </>
  );
}
