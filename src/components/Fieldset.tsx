
import {ReactNode} from 'react'

type Props = {
    children:  ReactNode,
    legend : string
}

const Fieldset = ({children, legend}: Props) => {
  return (
    <>
        <fieldset draggable={true} className='border border-slate-500 grid p-4 m-4 rounded-lg gap-4 shadow-md'>
        <legend className='p-2 rounded-mdo border-green-500 border rounded-md text-xs' >{legend}</legend>
        {children}
        </fieldset>
    </>
  )
}

export default Fieldset