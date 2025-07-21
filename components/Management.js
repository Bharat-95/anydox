import React from 'react'

const steps = [
  { title: 'Discover', tool: 'Data Discovery Tool' },
  { title: 'Analyze', tool: 'File Analysis Tools' },
  { title: 'Classify', tool: 'Classify360' },
  { title: 'Review', tool: 'Manual Process' },
  {
    title: 'Remediate',
    tool: (
      <>
        Data Migration Software,<br />
        Point DLP & AIP Solutions,<br />
        Scripting, etc.
      </>
    )
  },
  { title: 'Automate', tool: 'Classify360' },
]

const Management = () => {
  return (
    <div className="text-blue-900 bg-white py-20 space-y-10">
      <div className="text-center text-2xl">
        From Discovery to Remediation—One Unified Data Management Solution
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 lg:mt-4"
          >
            <div>{step.title}</div>
            <div className="bg-slate-900 text-white h-20 w-52 flex justify-center items-center p-2 rounded-md shadow-md text-center text-sm">
              {step.tool}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Management
