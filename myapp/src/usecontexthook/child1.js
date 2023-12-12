import { useContext } from 'react';
import { najeersab } from '/context';



function Child1(){
    const [data]=useContext(najeersab)

    return(
        <div>
          this is a child 1 component {data}
        </div>
    )
}


export default Child1









