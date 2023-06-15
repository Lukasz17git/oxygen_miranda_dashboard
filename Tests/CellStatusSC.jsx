import styled from "styled-components"

const statusStyle = {
   in: {
      bg: '#EEF9F2',
      tc: '#5AD07A'
   },
   out: {
      bg: '#FFEDEC',
      tc: '#E23428'
   },
   progress: {
      bg: '#fdfde0',
      tc: '#90811f'
   },
}

const StatusButton = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   padding: 0 20px;
   font-size: 14px;
   min-width: 120px;
   max-width: 100%;
   font-weight: 600;
   font-family: 'Poppins';
   width: 100px;
   border-radius: 10px;
   height: 36px;
   text-transform: capitalize;
   background-color: ${({ status }) => status.bg};
   color: ${({ status }) => status.tc};
`

const CellStatusSC = ({ status }) => {
   // status => in, out, progress
   return (
      <StatusButton status={statusStyle[status]}>
         {status}
      </StatusButton>
   )
}
export default CellStatusSC