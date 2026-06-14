import Child from "./Child"

const Parent = () =>{
  return(
    <div>
        <Child name="Samri"
        age={18}
        isActive={true}
        mark={[99,98,97,96,95]}
        address={{
          pincode:641302,
          email:"samri12@gmail.com",
          mobile:985674321
        }}/>
        <Child name="KG"
        age={18}
        isActive={true}
        mark={[99,98,97,96,95]}
        address={{
          pincode:641302,
          email:"samri12@gmail.com",
          mobile:985674321
        }}/>
    </div>
  )
}
export default Parent