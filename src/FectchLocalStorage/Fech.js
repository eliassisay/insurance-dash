export const fetch=()=>{
   const token= localStorage.getItem('user') !== 'undefined'? localStorage.getItem('user'):null
   return token
}
export const fetchbalance=()=>{
   const token= localStorage.getItem('balance') !== 'undefined'? localStorage.getItem('balance'):null
   return token
}