import { Column } from "@tanstack/react-table";
import React, { useEffect, useMemo, useState } from "react"
import DefaultTable from "../components/table/DefaultTable";


const BoardPage = () => {

    const data : {menu:string, price: string}[] = [
         {
            menu: "라면",
            price: "500원",
          },
          {
            menu: "김밥",
            price: "200원",
          },
          {
            menu: "오뎅",
            price: "300원",
          },
    ]
    const columns = [
          { 
            Header: "메뉴",
            accessor: "menu", // accessor is the "key" in the data
            canFilter: true,
          },
          {
            Header: "가격",
            accessor: "price",
            canFilter: false,
          },
    ]
  useEffect(()=>{
    // redux 적용 필요
  });
  
  return (
    <>
        <div>
            <DefaultTable columns={columns} data={data} />
        </div>
    </>
  )
}

export default BoardPage