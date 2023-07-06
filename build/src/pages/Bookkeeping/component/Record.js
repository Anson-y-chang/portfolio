import React, { useState } from 'react';
import Nav from "./Nav"
import Calendar from 'react-calendar';
import { useRecordsContext } from '../context/RecordsContext';
import { ramdonId } from '../utilites/ramdonId';
import { rebuildDate } from '../utilites/rebuildDate';
import formatCurrency from '../../EcommerceWebsite/utilities/CurrenyFormartor';
import './Calendar.css'
import styles from "./Record.module.css"


function Record() {
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState("餐飲")
  const [amount, setAmount] = useState("")
  const [memo, setMemo] = useState("")
  const [option, setOption] = useState("")
  const [editCategory, setEditCategory] = useState("")
  const [editAmount, setEditAmount] = useState("")
  const [editMemo, setEditMemo] = useState("")
  const [editingRecordId, setEditingRecordId] = useState('')
  const { records, setRecords, options, setOptions } = useRecordsContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    setRecords(records => {
      let id = ramdonId(6)
      // while (records.find(record => record.id === id)) {
      //   id = ramdonId(6)
      // }
      return [...records, { id: id, date: date.toDateString(), category: category, memo: memo, amount: amount }]
    }
    )

    setCategory(e.target[0].options[e.target[0].selectedIndex].value)
    setAmount("")
    setMemo("")
  }

  const handleEditSubmit = (e) => {
    e.preventDefault()
    setRecords(records.map(record => {
      if (record.id === editingRecordId) {
        return { ...record, category: editCategory, memo: editMemo, amount: editAmount }
      } else {
        return record
      }
    }))
    setEditingRecordId("")
    setEditCategory("")
    setEditAmount("")
    setEditMemo("")
  }

  const handleOptionSubmit = (e) => {
    e.preventDefault()
    if (options.findIndex(i => i === option) === -1) {
      setOptions(options => ([...options, option]))
    }
    setOption("")
  }

  const toggleEdit = (id, category, memo, amount) => {
    if (id === "") {
      setEditingRecordId("")
      setEditCategory("")
      setEditAmount("")
      setEditMemo("")
    } else {
      setEditingRecordId(id)
      setEditCategory(category)
      setEditAmount(amount)
      setEditMemo(memo)
    }
  }

  return (
    <>
      <Nav></Nav>
      <div className={styles.container}>
        <div className={styles.calendar}>
          <Calendar onChange={setDate} value={date} />
        </div>
        <div className={styles.records}>
          <div className={styles.date}>{rebuildDate(date.toDateString())}</div>
          <div className={styles.recordsWrap}>
            {/* 紀錄 */}
            {records.filter(i => i.date === date.toDateString()).map(record =>
              <div key={record.id}>
                {editingRecordId === record.id ?
                  <>
                    <form onSubmit={(e) => handleEditSubmit(e)}>
                    <div className={styles.categorySelect}>
                      <label htmlFor="category"></label>
                        <select id="category" defaultValue={record.category} onChange={(e) => {
                          setEditCategory(e.target.options[e.target.selectedIndex].value);
                        }}>
                          {options.map((option, index) => <option key={index} value={option}>{option}</option>)}
                        </select>
                      </div>
                      <label htmlFor="memo"></label>
                      <input
                        className={styles.memo}
                        id="memo"
                        type="text"
                        onChange={(e) => setEditMemo(e.target.value)}
                        value={editMemo}
                        placeholder="備註" />
                      <label htmlFor="amount"></label>
                      <input
                        className={styles.amount}
                        id="amount"
                        type="number"
                        onChange={(e) => setEditAmount(e.target.value)}
                        value={editAmount}
                        required
                        placeholder="請輸入金額" />
                      <button type='submit'>save</button>
                      <button onClick={() => {
                        setRecords(records => records.filter(cur => cur.id !== record.id));
                        setEditCategory("")
                        setEditAmount("")
                        setEditMemo("")
                      }}>delete</button>
                      <button onClick={() => toggleEdit("")}>cancel</button>
                    </form>
                  </> :
                  <div className={styles.record}>
                    <span>{record.category}</span>
                    <span>{record.memo}</span>
                    <span>{formatCurrency(record.amount).replace("CN¥ ", "")}</span>
                    <button className={styles.edit} onClick={() => { toggleEdit(record.id, record.category, record.memo, record.amount) }}>edit</button>
                  </div>
                }
              </div>
            )}
          </div>
          {/* 尾端添加區 */}
          <form onSubmit={handleSubmit}>
            <div className={styles.categorySelect}>
              <label htmlFor="category"></label>
              <select name="" id="category" onChange={(e) => {
                setCategory(e.target.options[e.target.selectedIndex].value);
              }}>
                {options.map((option, index) =>
                  <option key={index} value={option}>{option}</option>
                )}
              </select>
            </div>
            <label htmlFor="memo"></label>
            <input
              className={styles.memo}
              id="memo"
              type="text"
              onChange={(e) => setMemo(e.target.value)}
              value={memo}
              placeholder='備註' />
            <label htmlFor="amount"></label>
            <input
              className={styles.amount}
              id="amount"
              type="number"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              required
              placeholder='請輸入金額' />
            <button className={styles.add} type='submit'>add</button>
          </form>
          <form className={styles.newOption} onSubmit={handleOptionSubmit}>
            <span>新增費用類型: </span>
            <input 
            type="text" 
            onChange={(e) => setOption(e.target.value)}
            value={option}
            maxLength="6"
            required
            />
            <button type='submit'>add</button>
          </form>
        </div>
        <div className={styles.note}>
          Note: 此頁面僅唯一靜態網站，儲存之資訊會在頁面刷新後被移除，動態網頁相關功能尚在持續升級中。
        </div>
      </div>
    </>
  );
}

export default Record