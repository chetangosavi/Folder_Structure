import { useState } from "react"
import explorer from './data/folderData.js'
import Folder from "./components/Folder";
import useTraverseTree from "./hook/useTraverseTree.jsx";
const App = () => {

  const [folderData,setFolderData] = useState(explorer);
  const {insertNode} = useTraverseTree();

  const handleInsertNode = (folderId,item,isFolder)=>{
    const finaltree = insertNode(folderData,folderId,item,isFolder);

    setFolderData(finaltree)
  }
  
  return (
    <div>
      <Folder explorer={folderData} handleInsertNode={handleInsertNode}/>
    </div>
  )
}

export default App