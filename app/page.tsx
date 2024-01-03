'use client'
import {useState} from "react"


export default function Home() {
  const [result, setResult] = useState('')
  const [expression, setExpression] = useState('')

const handleButtonClick = (value:any) =>{
  if(value === '='){
    try{
      const evalResult = eval(expression).toString();
      setResult(evalResult);
      setExpression(evalResult);
    }
    catch(error){
      setResult('Error');
    }
  }else if(value === 'C' || value === 'c'){
    setResult('');
    setExpression('');
  }else{
    setExpression((prevExpression) => prevExpression + value)
  }
};

const  buttons = [
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '3', '2', '1', '-',
  '0', '.', '=', '+',
  'C'
];

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className = "texl-4xl font-bold mmb-10">Calculator</h1>
     <div ClassName=" bg-white p-6 rounded-lg shadow-lg">
      <input
        type="text"
        className="w-full mb-2 text-3xl border-b-2 border-gray-400 focus: outline-none"
        value={expression}
        readonly
      />
      <input
        type="text"
        className="w-full mb-4 text-4xl focus: outline"
        value={result}
        readonly
      />
     </div>
     <div className=" grid grid-cols-4 gap-4 ">
      {buttons.map((btn)=>( 
        < button 
        key={btn}
        onClick={()=>handleButtonClick(btn)}
        className="text-5xl bg-gray-300 hover:bg-gray-400 p-2 rounded-xl"
        >
          {btn}
        </button>
        ))}
     </div>
     </main>
  )
}
