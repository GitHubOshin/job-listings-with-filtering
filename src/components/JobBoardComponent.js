import React from 'react'

function JobBoardComponent({
  job: {
    company,
    logo,
    neww,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools
  }
}) {
  const tags = [role, level]
  if (tools) {
    tags.push(...tools)
  }

  if (languages) {
    tags.push(...languages)
  }

  return (
    <div className="bg-white text-desaturatedDarkCyan h-36 rounded shadow-lg flex items-center gap-8 px-11">
      <img alt={company} src={logo} />
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <div className="flex font-semibold items-center gap-4">
            <span className="text-lg font-semibold">{company}</span>
            <div className="w-fit flex gap-2 items-center">
              {neww ? (
                <span className="bg-desaturatedDarkCyan uppercase text-white text-xs  text-center rounded-2xl px-2 pt-[4px] pb-[2px]">
                  New!
                </span>
              ) : null}
              {featured ? (
                <span className="bg-slate800 uppercase text-white text-xs rounded-2xl px-2 pt-[4px] pb-[2px]">
                  Featured
                </span>
              ) : null}
            </div>
          </div>
          <div className="text-black cursor-pointer hover:text-desaturatedDarkCyan font-semibold text-[21px] leading-[31px]">
            {position}
          </div>
          <p className="text-slate500">
            {postedAt} • {contract} • {location}
          </p>
        </div>
        <div className="flex gap-4">
          {tags
            ? tags.map((tag, index) => (
                <button
                  key={index}
                  className="bg-ftLightGrayishCyan h-fit font-semibold text-base text-desaturatedDarkCyan rounded px-2 pt-[4px] pb-[2px] cursor-pointer hover:text-white hover:bg-desaturatedDarkCyan"
                >
                  {tag}
                </button>
              ))
            : ''}
        </div>
      </div>
    </div>
  )
}

export default JobBoardComponent
