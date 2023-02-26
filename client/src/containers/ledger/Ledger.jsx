import React, { useState, useContext } from "react";
import "./ledger.css";
import { FaTrashAlt } from "react-icons/fa";
import { LedNav, Footer } from "../../components";
import { Web3ApiContext } from "../../context/Web3Context";
import { main } from "../../Util/web3Storage";
const Ledger = () => {
  const [file, setFile] = useState();
  const [workspace, SetworkSpace] = useState({ field_name: "", value: "" });
  const [preview, setPreview] = useState([]);
  const [fileAccess, SetFileAccess] = useState(false);

  const { Send_ledgerdata } = useContext(Web3ApiContext);

  const Deploy_ledger_data = async (e) => {
    try {
      e.preventDefault();

      await Send_ledgerdata(preview);
    } catch (err) {
      console.log(err);
    }
  };

  const handleupload_Filecoin = async () => {};

  const delete_preview = (idx) => {
    const newPreview_data = preview.filter((d, i) => {
      return idx != i;
    });
    setPreview(newPreview_data);
  };

  return (
    <>
      <LedNav />
      {/* <Navbar /> */}
      <div className="led__ledger">
        <div className="led__tools">
          <div className="tool__buttons">
            <button
              onClick={() => {
                SetFileAccess(false);
                SetworkSpace({ field_name: "Title", value: "" });
              }}
            >
              Title
            </button>
            <button
              onClick={() => {
                SetFileAccess(false);
                SetworkSpace({ field_name: "Organization", value: "" });
              }}
            >
              Organisation
            </button>
            <button
              onClick={() => {
                SetFileAccess(false);
                SetworkSpace({ field_name: "", value: "" });
              }}
            >
              Custom Fields
            </button>
            <button
              onClick={() => {
                SetworkSpace({ field_name: "", value: "" });
                SetFileAccess(!fileAccess);
              }}
            >
              Add File
            </button>
          </div>
        </div>

        <div className="led__workspace">
          <div className="workspace__inputs">
            <input
              placeholder="Enter Field Name"
              value={workspace.field_name}
              onChange={(e) =>
                SetworkSpace({ ...workspace, field_name: e.target.value })
              }
            />
            {fileAccess ? (
              <input
                className="form-control"
                type="file"
                id="formFileMultiple"
                name="file"
                onChange={async (e) => {
                  const cid = await main(e.target.files);
                  SetworkSpace({ ...workspace, value: cid });
                }}
              />
            ) : (
              <input
                placeholder="Enter Field Name"
                value={workspace.value}
                onChange={(e) =>
                  SetworkSpace({ ...workspace, value: e.target.value })
                }
              />
            )}
          </div>

          <div className="workspace__button">
            <button
              onClick={() => {
                SetworkSpace({ field_name: "", value: "" });
                setPreview([...preview, workspace]);
              }}
            >
              Add
            </button>
          </div>
        </div>

        <div className="led__preview">
          <div className="led__preview-header">PREVIEW</div>
          {preview.map((p, idx) => (
            <div key={idx}>
              <div className="led__preview-table">
                <div className="led__preview-field">{p.field_name}</div>

                <div className="led__preview-colon">:</div>

                <div className="led__preview-value">{p.value}</div>

                <div className="led__preview-delete">
                  <FaTrashAlt onClick={() => delete_preview(idx)} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="led__deploy section__padding">
        <button onClick={Deploy_ledger_data}>Deploy</button>
      </div>
      <Footer />
    </>
  );
};
export default Ledger;
