import { useState } from 'react'
import { Tree,TreeNode } from 'react-organizational-chart'
import './App.css';
import { BarList,Card } from '@tremor/react';

const pages = [{name:'/home',value:2019},
{name:'/blocks',value:1053},
{name:'/components',value:997}];

const valueFormatter = (number) => `${Intl.NumberFormat('us').format(number).toString()}`


function App() {

  const[extended,setExtended]=useState(false);

  const MouseOver = () => {
 
      setExtended(true);
   
   
  }
  

  const MouseOut = (e) => {
    setExtended(false);
  }

 

  return (
    <div className='container'>
    <h1 className='text-2xl'>React Lizomotors Dashboard Page</h1>
    <div className='root'>
    <Tree lineWidth={'2px'} lineColor={'black'} 
      lineBorderRadius={'10px'} lineHeight={'30px'} 
   
 
    label={<div ></div>}>


    <TreeNode label={<div className='res' >Research</div>}>
      <TreeNode>
       <TreeNode label={<div className='res-1'>External</div>}>
        <TreeNode label={<div className='b2c'>B2C</div>}>

            <TreeNode label={<div onMouseEnter={MouseOver} onMouseLeave={MouseOut} className='b2c-1'>Online</div>} />
            <TreeNode label={<div onMouseEnter={MouseOver} onMouseLeave={MouseOut} className='b2c-2'>Interview</div>}/>
            <TreeNode label={<div onMouseEnter={MouseOver} onMouseLeave={MouseOut} className='b2c-3'>Public Data</div>}/>
            <TreeNode label={<div onMouseEnter={MouseOver} onMouseLeave={MouseOut} className='b2c-4'>Health</div>}/>

        </TreeNode>
        <TreeNode label={<div className='b2c'>B2C</div>} />
       </TreeNode>

        <TreeNode label={<div className='res-2'>Internal</div>}/>
      </TreeNode>
    </TreeNode>

    <TreeNode label={<div className='pla'>Planning</div>}>
    <TreeNode>
        <TreeNode label={<div className='pla-1'>PRD</div>} />
        <TreeNode label={<div className='pla-2'>Specs</div>}/>
      </TreeNode>
    </TreeNode>

    <TreeNode label={<div className='des'>Designing</div>}>
    <TreeNode>
        <TreeNode label={<div className='des-1'>Hardware</div>} />
        <TreeNode label={<div className='des-2'>Software</div>}/>
      </TreeNode>
    </TreeNode>

    <TreeNode label={<div className='man'>Manufacturing</div>}>
    <TreeNode>
        <TreeNode label={<div className='man-1'>Material</div>} />
        <TreeNode label={<div className='man-2'>Production</div>}/>
      </TreeNode>
    </TreeNode>
    <TreeNode label={<div className='sal'>Sales/Marketing</div>}>
    <TreeNode>
        <TreeNode label={<div className='sal-1'>Online</div>} />
        <TreeNode label={<div className='sal-2'>Dealership</div>}/>
      </TreeNode>
    </TreeNode>
    

    </Tree>

    
  
    </div>
    {extended && (
      <Card className="p-0">
      <div className="flex items-center justify-between border-b border-tremor-border p-6 dark:border-dark-tremor-border">
        <p className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Top pages
        </p>
        <p className="text-tremor-label font-medium uppercase text-tremor-content dark:text-dark-tremor-content">
          Visitors
        </p>
      </div>
      <div className={`overflow-hidden p-6 ${extended ? '' : 'max-h-[260px]'}`}>
        <BarList data={pages} valueFormatter={valueFormatter} />
      </div>
      <div className={`flex justify-center ${extended ? 'px-6 pb-6' : 'absolute inset-x-0 bottom-0 rounded-b-tremor-default bg-gradient-to-t from-tremor-background to-transparent py-7 dark:from-dark-tremor-background'}`}>
        <button
          className="flex items-center justify-center rounded-tremor-small border border-tremor-border bg-tremor-background px-2.5 py-2 text-tremor-default font-medium text-tremor-content-strong shadow-tremor-input hover:bg-tremor-background-muted dark:border-dark-tremor-border dark:bg-dark-tremor-background dark:text-dark-tremor-content-strong dark:shadow-dark-tremor-input hover:dark:bg-dark-tremor-background-muted"
          onClick={() => setExtended(!extended)}
        >
          {extended ? 'Show less' : 'Show more'}
        </button>
      </div>
    </Card>
    )}

    </div>
  )
}

export default App
