import React, { useState } from 'react'

const Pagination = ({ records, children }) => {
     function ArrayToPages(array, pageSize = 20) {
        var pages = [];
        for (var i = 0; i < array.length; i += pageSize) {
          pages.push(array.slice(i, i + pageSize));
        }
        return {
          pages: pages,
          totalPage: pages.length,
          totalItems: array.length,
        }
      }


    const previousHandeler = () => {
          
    }
    const nextHandeler = () => {
         
    }
    return (
        <div style={{ display: "flex" }}>
            <div>
                <button>previous</button>
            </div>
            <div>
                <button>Next</button>
            </div>
        </div>
    )
}

export default Pagination