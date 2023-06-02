import { useRef, useState } from 'react';
import { useDrag, useDrop, } from 'react-dnd';

const DndItemWrapper = ({ id, children, index, setValue }) => {

   const moveCard = (dragIndex, hoverIndex) => setValue(prevCards => {
      const updatedCards = [...prevCards];
      const [draggedCard] = updatedCards.splice(dragIndex, 1);
      updatedCards.splice(hoverIndex, 0, draggedCard);
      return updatedCards;
   });

   const ref = useRef(null)
   const [{ handlerId }, drop] = useDrop({
      accept: 'card',
      collect(monitor) {
         return {
            handlerId: monitor.getHandlerId(),
         }
      },
      hover(item, monitor) {
         if (!ref.current) return
         const dragIndex = item.index
         const hoverIndex = index
         if (dragIndex === hoverIndex) return
         const hoverBoundingRect = ref.current?.getBoundingClientRect()
         const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
         const clientOffset = monitor.getClientOffset()
         const hoverClientY = clientOffset.y - hoverBoundingRect.top
         if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return
         if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return
         moveCard(dragIndex, hoverIndex)
         item.index = hoverIndex
      },
   })
   const [{ isDragging }, drag] = useDrag({
      type: 'card',
      item: () => {
         return { id, index }
      },
      collect: (monitor) => ({
         isDragging: monitor.isDragging(),
      }),
   })

   drag(drop(ref))

   return (
      <div ref={ref} style={{ opacity: isDragging ? 0 : 1 }} data-handler-id={handlerId}>
         {children}
      </div>
   )
}


const DndWrapper = ({ data, Component }) => {

   const [dndData, setDndData] = useState(data)

   return (
      <>
         {dndData.map((item, index) => (
            <DndItemWrapper key={item.id} index={index} id={item.id} setValue={setDndData}>
               <Component data={item} />
            </DndItemWrapper>
         ))}
      </>
   )
}

export default DndWrapper