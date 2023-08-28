import style from "./Paginado.module.css"


const Paginado=({studentWithPage,allStudents,paginado})=>{

const pageNumbers=[]
// voy a recorrer u n arreglo en el que voy a tomar el numero redondo
for(let i =1; i<Math.ceil(allStudents/studentWithPage);i++){
    pageNumbers.push(i)
}
console.log(pageNumbers,"pageNumbers")
console.log(allStudents,"allStudents");
return (
    <nav className={style.div}>
        <ul>
            {pageNumbers?.map(number=>(
                <li key={number} className={style.li}>
                    <button onClick={()=>paginado(number) } className={style.number} >{number}</button>
                </li>
            ))}
        </ul>
     </nav>
)

}
  //el math ceil redondea para arriba todos las
        // cards sobre las card que quierpo por pagina
          // con esto que genero, lo pusheo y resulta un arreglo de numeros 
        //que luego pregunto si lo tengo
        // y luego si lo tengo lo mapeo
export default Paginado