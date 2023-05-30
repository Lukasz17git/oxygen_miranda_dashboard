

const ResumeeCard = ({ Icon, number, text, iconClassName }) => {
   return (
      <div className="p-16 w-100% h-100% frc group bg-fff br-12 g-16 s-card h:pointer">
         <div className="h-64 w-64 frcc br-8 bg-red-pastel group-hover:bg-red-main">
            <Icon className={`fill-red-main group-hover:fill-app-bg-white ${iconClassName}`} />
         </div>
         <div className="fcnb h-100%">
            <strong className="tf-app-semibold tc-text-dark ts-28">{number}</strong>
            <div className="tf-app-light tc-text-grey-darker ts-14">{text}</div>
         </div>
      </div>
   )
}

export default ResumeeCard