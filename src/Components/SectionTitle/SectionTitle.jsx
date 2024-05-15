
export const SectionTitle = ({subHeading, heading}) => {
  return (
    <div className="mx-auto md:w-4/12 text-center my-8">
        <p className="text-yellow-500 mb-2">---{subHeading}---</p>
        <h3 className="text-3xl uppercase border-y-2 p-4">{heading}</h3>
    </div>
  )
}
