function App()
{
  return (
    <div>
  <Student name="K.Prem Siddhartha"/>
    </div>
  );
}
function Student(pro)
{
  return <h2>Hello, {pro.name}!</h2>
}
export default App;