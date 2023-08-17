import React, {useState,useEffect} from "react";
import Editor from "./Editor";
import useLocalStorage from "../hooks/useLocalStorage";
function App() {
  const[html,setHtml] = useLocalStorage('html','')
  const[css,setCSS] = useLocalStorage('css','')
  const[javascript,setJavaScript] = useLocalStorage('javascript','')
  const[srcDoc,setSrcDoc] = useState('')
  useEffect (()=>{
    const timeout = setTimeout(()=>{
      setSrcDoc(`
      <html>
      <body> ${html}</body>
      <style>${css}</style>
      <script>${javascript}</script>
      </html>`)
    
    }, 250)
    return () => clearTimeout(timeout)  
}, [html,css,javascript])

  return (
    <div className="App">
      <div className="pane top-pane">
      
      <Editor language="xml" displayName="HTML" value ={html} onChange={setHtml}
      />
      <Editor language="xml" displayName="CSS" value ={css} onChange={setCSS}/>
      <Editor language="xml" displayName="JavaScript" value ={javascript} onChange={setJavaScript}/>

      </div>
      <div className="pane">
        <iframe title="output"
        srcDoc = {srcDoc}

        sandbox = "allow-scripts"
        width="100%"
        height="100%"
        />
      </div>

    </div>
  );
}

export default App;
