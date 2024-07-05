"use client"

import { useEffect } from "react"
import "./RightSide.css"

export default function RightSide(){

  
  useEffect(()=>{
    let rightSideDivElements = document.getElementById("rightSideContainer").querySelectorAll(".rightSide")
    document.addEventListener('click', (event) => {
      if (window.lastFocusedDiv) {
        window.lastFocusedDiv.focus();
      }
      else{
        rightSideDivElements[0].focus()
      }
    })

    rightSideDivElements.forEach((div, index) => {
      div.addEventListener('focus', (e) => {
          window.lastFocusedDiv = div;
      });

      div.addEventListener("keydown", (e)=>{
        console.log("keydown", e);
        
        if(e.keyCode == 37){
          if((index + 3)%3 != 0){
            rightSideDivElements[index-1].focus()
          }
          else{
            if(window.testLastElementsStack){
              window.testLastElementsStack.focus()
            }
            else{
              document.getElementById("leftSideContainer").querySelector(".leftSideDiv").focus()
            }
            window.testLastElementsStack.classList.remove("lastFocus")
            window.testLastElementsStack = rightSideDivElements[index]
          }
        }
        else if(e.keyCode == 38){
          if((index - 3) >= 0){
            rightSideDivElements[index-3].focus()
          }
        }
        else if(e.keyCode == 39){
          if((index + 1)%3 != 0){
            rightSideDivElements[index+1].focus()
          }
        }
        else if(e.keyCode == 40){
          if((index + 3) < 9){
            rightSideDivElements[index+3].focus()
          }
        }

      })
    })

    return(
      rightSideDivElements.forEach(div => {
        div.removeEventListener('focus', (e) => {
          window.lastFocusedDiv = div;
        });
        div.removeEventListener("keydown", (e)=>{
          console.log("keydown", e);
          
          if(e.keyCode == 37){
            if((index + 3)%3 != 0){
              rightSideDivElements[index-1].focus()
            }
          }
          else if(e.keyCode == 38){
            if((index - 3) >= 0){
              rightSideDivElements[index-3].focus()
            }
          }
          else if(e.keyCode == 39){
            if((index + 1)%3 != 0){
              rightSideDivElements[index+1].focus()
            }
          }
          else if(e.keyCode == 40){
            if((index + 3) < 9){
              rightSideDivElements[index+3].focus()
            }
          }
  
        })
      })
    )

  },[])

  return(
    <div className="rightSideContainer" id="rightSideContainer">
      <div className="rightSide" tabIndex={1} >A</div>
      <div className="rightSide" tabIndex={1} >B</div>
      <div className="rightSide" tabIndex={1} >C</div>
      <div className="rightSide" tabIndex={1} >D</div>
      <div className="rightSide" tabIndex={1} >E</div>
      <div className="rightSide" tabIndex={1} >F</div>
      <div className="rightSide" tabIndex={1} >G</div>
      <div className="rightSide" tabIndex={1} >H</div>
      <div className="rightSide" tabIndex={1} >I</div>
    </div>
  )
}