import React from 'react'
import Tabs from './tabs'
function TabsApp() {
  const tabs=[
    {
      label: 'Tab 1',
      content: <div>
        This is the content for Tab 1
      </div>
    },
    {
      label:'Tab 2',
      content:<div>
        This is the content for Tab 2
      </div>
    },
    {
      label:'Tab 3',
      content:<div>
        This is the content for Tab 3
      </div>
    }
  ]
 
  function handleChange(getCurrInd){
    console.log( 'Onchange=',getCurrInd)
  }
  return (
   <>
    <Tabs tabsList={tabs} onChange={handleChange}/>
   </>
  )
}

export default TabsApp