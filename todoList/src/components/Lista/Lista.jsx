import ListaItems from "../ListaItems/ListaItems";

export default function Lista({ items, setState }) {
  function borrarItem(e,id) {
     e.stopPropagation();
    setState(items.filter((item) => item.id !== id));
  }


  function tachar(index,){
    const nuevoItems = [...items];
    nuevoItems[index].completed =  !nuevoItems[index].completed
    setState(nuevoItems);
    

  }

  return (
    <>
      {items ? (
        <ul className="list-group container">
          {items.map((item,index) => (
            <ListaItems setState={borrarItem} key={item.id} item={item} tachar={tachar} index={index} />
          ))}
        </ul>
      ) : (
        <h3> Cargando...</h3>
      )}
    </>
  );
}
