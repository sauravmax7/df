import React from 'react'
import {useState, useRef } from "react";
import {Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
export default function Share() {
    
    
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);
    const history=useHistory();
    
    
    function copyToClipboard(e) {
      textAreaRef.current.select();
      document.execCommand('copy');
      
      setCopySuccess('Copied!');
    };
    const getback=()=>{
        history.push("/AllNews")
    }
    
    
    return (
        
            <div>
            {document.queryCommandSupported('copy') &&
             <div>
                 <Button onClick={getback}>Back</Button>{copySuccess}
               <Button onClick={copyToClipboard}>Share</Button> 
             </div>
}
             <textarea className="hiddenBox" id="urlInput" ref={textAreaRef}>{window.location.href}</textarea>
            
      </div>
            
    )
}
