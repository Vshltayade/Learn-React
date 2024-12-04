// eslint-disable-next-line react/prop-types
function Cup({guest}) {
  // Bad: changing a preexisting variable!
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet2() {
  return (
    <>
      <Cup guest={2}/>
      <Cup guest={5}/>
      <Cup guest={10}/>
    </>
  );
}