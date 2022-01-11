const Card = ({ label, data, backgroundColor }) => {
  return (
      <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 xl:pr-3 xl:pl-1">
        <div className={`border rounded-md shadow p-2 ${backgroundColor}`}>
          <div className="flex flex-row items-center">
            <div className="flex-shrink pl-1 pr-4"></div>
            <div className="flex-1 text-left pr-1">
              <h5 className="text-white">{label}</h5>
              <h3 className="text-white text-3xl">{data}</h3>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Card
