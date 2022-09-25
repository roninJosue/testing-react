export default function Greeter({name}){
  if (name) return (<p>Hello there {name}</p>)

  return (<p>Hello stranger, nice to meet you!</p>)
}