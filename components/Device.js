const Device = ({data}) => {
    const encodeStatus = (status) => {
        if(status == 1) return 'Online'

        return 'Offline'
    }
    return(
        <div className="flex flex-row bg-white rounded px-5 py-1 items-center justify-between">
            <svg className="h-7 w-7 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path fill="#fff" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
            </svg>
            <div>
                <p className="-mb-2">{data.name}</p>
                <small className="text-gray-400">{data.serial}</small>
            </div>
            <div>
                <div className="rounded-full bg-green-300 h-3 w-3 mx-auto animate-ping"></div>
                <small className="text-gray-400">{encodeStatus(data.status)}</small>
            </div>
        </div>
    )
}

export default Device