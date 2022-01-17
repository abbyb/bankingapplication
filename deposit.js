function Deposit() {
  const [show, setShow]         = React.useState(true);


  return (
    <Card
      
      textcolor="black"
      header="Deposit"
      status={status}
      body={show ? (
        <>
       
        </>
      ):(
        <>
        <h5>Successful Login</h5>
        
        </>
      )}
    />
  )
}