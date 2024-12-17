import React from 'react'
import { GridComponent , ColumnsDirective, ColumnDirective, Resize, Page, ExcelExport, PdfExport, Inject, Sort, ContextMenu, Filter } from '@syncfusion/ej2-react-grids'


import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'

import { Header } from '../components'

const Orders = () => {
  return (
    <div className='m-5 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category = 'page' title = 'Orders' />
      <GridComponent
       id='gridComp'
       dataSource={ordersData} 
       allowPaging
       allowSorting
      >
        <ColumnsDirective>
          { ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          )) }
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Page, Filter, ExcelExport, PdfExport]} />
      </GridComponent>
    </div>
  )
}

export default Orders