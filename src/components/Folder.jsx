import { useState } from "react";

const Folder = ({ handleInsertNode,explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showinput, setShowInput] = useState({
    isVisible: false,
    isFolder: null,
  });

  
  const handleOnClick = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      isVisible: true,
      isFolder,
    });
  };

  const onAddFolder = (e)=>{
    if(e.keyCode === 13 && e.target.value){
      handleInsertNode(explorer.id,e.target.value,showinput.isFolder);
      setShowInput({...showinput,isVisible:false})
    }
  }

  if (explorer.isFolder) {
    return (
      <div className="ml-2">
        {/* Root */}
        <div
          className="flex justify-between items-center w-[300px] bg-gray-200 mt-2 p-1 rounded-lg"
          onClick={() => setExpand(!expand)}
        >
          <span> 📁 {explorer.name} </span>
          <div className="flex gap-5">
            {/* Add Folder */}

            <button
              className="bg-gray-300 px-2 py-1 rounded-lg transition ease-in hover:bg-gray-400 flex items-center justify-center"
              onClick={(e) => handleOnClick(e, true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 transition-transform duration-300 ease-linear  hover:rotate-90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>{" "}
              Folder
            </button>

            {/* Add File */}
            <button
              className="bg-gray-300 px-1 py-1 rounded-lg transition ease-in hover:bg-gray-400 flex items-center justify-center"
              onClick={(e) => handleOnClick(e, false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 transition-transform duration-300 ease-linear  hover:rotate-90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>{" "}
              File
            </button>
          </div>
        </div>

        {/* One Level Nesting */}
        <div className={`ml-10 ${expand ? "block" : "hidden"}`}>
          {
            showinput.isVisible && (
              <div>
                <span>{showinput.isFolder?"📁":"📄"}</span>
                <input className="mt-2 p-1" type="text" autoFocus onBlur={()=>setShowInput({...showinput,isVisible:false})} onKeyDown={onAddFolder}/>
              </div>
            )
          }
          {explorer.items.map((exp) => {
            return <Folder explorer={exp} key={exp.id} handleInsertNode={handleInsertNode}/>;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="mt-3">
        <span>📄 {explorer.name}</span>
      </div>
    );
  }
};

export default Folder;
