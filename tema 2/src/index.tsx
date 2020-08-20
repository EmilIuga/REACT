import * as React from 'react'
import ProgressBarSize from './components/progressbar/progressbar'
import PaddingTable from './components/table/table'

export const StartingPage = () => {
  return (
    <div>
      <h1>This is a table</h1>
      <PaddingTable></PaddingTable>
      <h1>This is a progress bar</h1>
      <ProgressBarSize></ProgressBarSize>
    </div>
  )
}
