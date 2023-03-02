import React, { useState, useEffect, useMemo } from 'react'
import { generatePokemons } from './GeneratePokemons';
// import Pagination from './Pagination';
const pokemon = () => {
    const [records, setRecords] = useState([]);
    const [q, setQ] = useState("");
    const [thres, setThres] = useState(Number)
    const [currentIndex, setCurrentIndex] = useState(1)


    const getData = async () => {
        return generatePokemons()
    }

    useEffect(() => {
        getData().then(res => setRecords(res));
        console.log("record", records);
    }, [])  
      

    const filteredData = useMemo(()=>records.filter((item)=>{
        const searchFilter =  item.Name.toLowerCase().startsWith(q.toLowerCase())
        const threshHoldFilter =   item.power >= thres
        return searchFilter&&threshHoldFilter
    }),[records,q,thres])

  const{pages, total}= useMemo(()=>function ArrayToPages(records, pageSize = 20) {
    var pages = [];
    for (var i = 0; i < records.length; i += pageSize) {
      pages.push(records.slice(i, i + pageSize));
    }
    return {
      pages: pages,
      totalPage: pages.length, 
      totalItems:records.length,
    }
  },[])

    const maxValue = useMemo(() => {
        return Math.max(...filteredData.map((item) => item.power));
    }, [filteredData])

    const minValue = useMemo(() => {
        return Math.min(...filteredData.map((item) => item.power));
    }, [filteredData])
     
    return (
        <div style={{ display: "flex", gap: "40px", flexDirection: "column" }} >
            <div style={{ display: "flex", gap: "40px" }}>
                <div>
                    <label htmlFor="">SearchName</label><input type="Search" value={q} onChange={(e) => setQ(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Power ThreshHold Limit</label><input type="Search"  value={thres}  onChange={(e) => setThres(e.target.value)} />
                </div>
            </div>
            <div style={{ display: "flex", gap: "40px" }}>
                <div>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>stats</th>
                            <th>Power</th>
                        </tr>
                        {filteredData.map((item, i) => <Item item={item} key={i}></Item>)}
                    </table>
                </div>
                <div>
                    <div>MIN:{minValue}</div>
                    <div>MAX:{maxValue}</div>
                </div>
            </div>
            <button>Previous</button>
            <button>Next</button>
        </div>
    )
    function Item({ item }) {
        return (
            <tr>
                <td>{item.ID}</td>
                <td>{item.Name}</td>
                <td>{item.Type}</td>
                <td>
                    <td>{item.HP}</td>
                    <td>{item.Attack}</td>
                    <td>{item.Defense}</td>
                    <td>{item.SpecialAttack}</td>
                    <td>{item.SpecialDefense}</td>
                    <td>{item.Speed}</td>
                </td>
                <td> {item.power}</td>
            </tr>
        )
    }
}


export default pokemon