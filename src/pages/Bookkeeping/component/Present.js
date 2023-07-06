import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip, Cell, AreaChart, Area, CartesianGrid, XAxis, YAxis  } from 'recharts';
import { PieChart, Pie } from 'recharts';
import { useRecordsContext } from '../context/RecordsContext';
import last12Month from '../utilites/last12Month';
import generateRandomColorCode from '../utilites/ramdonColor';
import Nav from "./Nav"
import styles from './Present.module.css'

function Present() {
  const { records, options } = useRecordsContext()
  const [toggle, setToggle] = useState(true)
  const [pieData, setPieData] = useState([])
  const [lineData, setLineData] = useState([])
  const [monthOn, setMonthOn] = useState("Jun")
  const today = new Date().toDateString()

  const createPieData = (year, month) => {
    const data = []
    for (let i = 0; i < options.length; i++) {
      data.push({
        "name": options[i],
        "value": records
          .filter(i => (i.date.split(" ")[3] === year && i.date.split(" ")[1] === month))
          .reduce((acc, cur) => {
            if (cur.category === options[i]) {
              return acc + cur.amount * 1
            } else {
              return acc + 0
            }
          }, 0),
        "color": generateRandomColorCode()
      })
    }
    return data.sort((a, b) => (b.value - a.value)).filter(i => i.value !== 0)
  }

  const switchMonth = (date) => {
    setMonthOn(date.slice(-3))
    setPieData(createPieData(date.slice(0, 4), date.slice(-3)))
  }

  const createLineData = () => {
    const data = []
    for (let i = 0 ; i < last12Month().length; i++) {
      const thisMonth = last12Month()[i]
      data.push({
        "name": thisMonth,
        "總支出": records
          .filter(i => (i.date.split(" ")[3] === thisMonth.slice(0,4) && i.date.split(" ")[1] === thisMonth.slice(-3)))
          .reduce((acc,cur) => (acc + cur.amount*1),0)
      })
    }
    return data.reverse()
  }

  useEffect(() => {
    console.log("uesEffect provoked");
    setPieData(createPieData(today.slice(-4), today.slice(4, 7)));
    setLineData(createLineData());
  }, [records])

  return (
    <>
      <Nav></Nav>
      <div className={styles.container}>
        <div className={styles.swithChart}>
          <button onClick={() => setToggle(true)}>月支出分佈</button>
          <button onClick={() => setToggle(false)}>支出趨勢圖</button>
        </div>
        {toggle === true ?
          <div className={styles.pieChart}>
            <div className={styles.monthButtonArea}>
              {last12Month().map((cur, index) =>
                <button
                  id={cur.slice(-3)}
                  className={styles.monthButton}
                  key={index}
                  onClick={() => switchMonth(cur)}
                  style={cur.slice(-3) === monthOn ? { fontWeight: '600' } : { fontWeight: '400' }}
                >
                  {cur}
                </button>
              )}
            </div>
            {pieData.length === 0 ?
              <div className={styles.noData}>
                <span>No data to display</span>
                <br />
                <Link to='/bookkeep/record'>去添加一筆！</Link>
              </div> :
              <>
                <PieChart width={300} height={300}>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    ameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={140} >
                    {pieData.map((cur, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={cur.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
                <div className={styles.optionsArea}>
                  {pieData.map((cur, index) =>
                  (<div className={styles.optionWrap} key={index}>
                    <div className={styles.block} style={{ backgroundColor: cur.color }}></div>
                    <span>{cur.name} {Math.round((cur.value / pieData.reduce((acc, cur) => (acc + cur.value), 0)) * 10000) / 100}%</span>
                  </div>)
                  )}
                </div>
              </>
            }
          </div> :
          <div className={styles.lineChart}>
            <AreaChart width={750} height={360} data={lineData}
              margin={{ top: 0, right: 50, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv" x1="0.1" y1="0.1" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area type="monotone" dataKey="總支出" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
          </div>
        }
        <div className={styles.note}>
          Note: 此頁面僅唯一靜態網站，儲存之資訊會在頁面刷新後被移除，動態網頁相關功能尚在持續升級中。
        </div>
      </div>
    </>
  );
}

export default Present;