import React, { useMemo, useState, useEffect } from 'react'
import { Data } from '../PokemonData';

const Pokemon = () => {
    const [records, setRecords] = useState(Data);

    useEffect(() => {

        const data = records.map((item) => {
            item.power = item.Attack + item.HP + item.SpecialAttack + item.Defense + item.SpecialDefense + item.Speed
            //console.log("power.....", item.power)
            // console.log("item", item);
            return item
        })
        // console.log("data.....", data);
        setRecords(data)
    }, [])

    const maxValue = useMemo(() => {
        console.log("maxValueTesting...", Math.max(...records.map(item => item.power)));
        return Math.max(...records.map(item => item.power))
    }, [records])


    const minValue = useMemo(() => {
        console.log("minValueTesting...", Math.min(...records.map(item => item.power)));
        return Math.min(...records.map(item => item.power))
    }, [records])



    const searchNameHandler = (searchvalue) => {
        if (searchvalue) {
            const filteredData = records.filter((item) => {
                console.log(searchvalue, "hhhhhh=====", item.Name.toLowerCase().includes(searchvalue.toLowerCase()));
                return item.Name.toLowerCase().includes(searchvalue.toLowerCase())
            })
            console.log("ooooooooooooo", filteredData, records);
            setRecords(filteredData);
        } else {
            setRecords(Data)
            console.log('filteredRecords', records);
        }
    }
    const threshholdHandeler = (searchvalue) => {
        if (searchvalue) {
            const filteredData2 = records.filter((item) => {
                console.log("testing....", item.power >= searchvalue);
                return item.power >= searchvalue;
                       
            })
            setRecords(filteredData2)
            console.log("filteredData2", filteredData2);
        } else {
            setRecords(Data)
        }
    }
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", gap: "40px", padding: "20px" }}>
                <div style={{ display: "flex", gap: "10px " }}>
                    <div> <label>SearchName</label><input type="search" onChange={(e) => { searchNameHandler(e.target.value) }} /></div>
                    <div><label> Power ThreshHold Limit</label><input type="search" onChange={(e) => { threshholdHandeler(e.target.value) }} /></div>
                    <div> <label>ThreshHold Count</label>{}</div>
                </div>
                <div style={{ display: "flex", gap: "40px" }}>
                    <div>
                        <table>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th style={{ paddingRight: "200px" }}>Stats</th>
                                <th>Power</th>
                            </tr>
                            {records.map((item, i) => <Item item={item} key={i}></Item>)}
                        </table>
                    </div>
                    <div>
                        <div>Min:{minValue}</div>
                        <div>Max:{maxValue}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
function Item({ item }) {

    return (
        <tr>
            <td>{item.ID}</td>
            <td>{item.Name}</td>
            <td>{item.Type}</td>
            <td>{item.Stats}
                <td>{item.HP}</td>
                <td>{item.Attack}</td>
                <td>{item.Defense}</td>
                <td>{item.SpecialAttack}</td>
                <td>{item.SpecialDefense}</td>
                <td>{item.Speed}</td>
            </td>
            <td>{item.power}</td>
        </tr>
    )
}
export default Pokemon; 