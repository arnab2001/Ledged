import React, { useState } from 'react'
import './ledger.css'
import { FaTrashAlt } from "react-icons/fa";
import { LedNav, Footer } from '../../components';
const Ledger = () => {


  const delete_preview = (idx) => {
    const newPreview_data = preview.filter((d, i) => {
      return idx != i
    }
    )
    setPreview(newPreview_data)
  }
  const [workspace, SetworkSpace] = useState({ field_name: "", value: [""] })
  const [preview, setPreview] = useState([])
  const updatevalue = (idx) => (e) => {
    const valArr = workspace.value.map((d, i) => {
      if (idx == i) return e.target.value
      return d
    })
    SetworkSpace({ ...workspace, value: valArr });
  }

  return (
    <>
      <LedNav />
      {/* <Navbar /> */}
      <div className='led__ledger'>


        <div className="led__tools">
          <div className="tool__buttons">
            <button onClick={() => SetworkSpace({ field_name: "Title", value: [""] })} >Title</button>
            <button onClick={() => SetworkSpace({ field_name: "Organization", value: [""] })}>Organisation</button>
            <button onClick={() => SetworkSpace({ field_name: "", value: [""] })}>Custom Fields</button>
            <button onClick={() => SetworkSpace({ field_name: "", value: [""] })}>Add File</button>
          </div>
        </div>


        <div className="led__workspace">
          <div className="workspace__inputs">
            <input placeholder='Enter Field Name' value={workspace.field_name} onChange={e => SetworkSpace({ ...workspace, field_name: e.target.value })} />
            {
              workspace.value.map((d, idx) => {
                return (
                  <input placeholder='Enter The Value' value={d} onChange={updatevalue(idx)} />
                )
              })
            }
          </div>

          <div className="workspace__button">
            <button onClick={() => {
              SetworkSpace({ field_name: "", value: [""] })
              setPreview([...preview, workspace])
            }
            }>Add</button>
          </div>
        </div>


        <div className="led__preview">
          <div className="led__preview-header">
            PREVIEW
          </div>
          {





            preview.map((p, idx) => (
              <div key={idx}>




                <div className="led__preview-table">
                  <div className="led__preview-field">
                    {p.field_name}
                  </div>



                  <div className="led__preview-colon">
                    :
                  </div>


                  <div className="led__preview-value">
                    {p.value.map((d, i) => <div key={i}>{d}</div>)}
                  </div>


                  <div className="led__preview-delete">
                    <FaTrashAlt onClick={() => delete_preview(idx)} />
                  </div>


                </div>

              </div>
            ))
          }
        </div>
      </div>
      <div className="led__deploy section__padding">
        <button>Deploy</button>
      </div>
      <Footer/>

    </>
  )
}
export default Ledger