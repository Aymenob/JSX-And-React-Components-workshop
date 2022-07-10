
import React from 'react'
const adressstyle={fontWeight:300,fontSize:20,marginLeft:'2cm'}
const text1={listStyleType:'none',marginLeft:"1cm",fontWeight:350,fontSize:23,color:'purple'}
export function Address() {
  return (
    <p style={adressstyle}>
        <li style={text1}>Adress</li>
        <li>Country: Tunis</li>
        <li>Village:Tunis</li>
        <li>Place:Cite Olympique</li>
    </p>
  )
}
export default Address
