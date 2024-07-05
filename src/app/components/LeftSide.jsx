"use client"

import { useEffect } from "react"
import "./LeftSide.css"

export default function LeftSide(){

  
  useEffect(()=>{
    let leftSideDivElements = document.getElementById("leftSideContainer").querySelectorAll(".leftSideDiv")
    window.lastFocusedDiv = leftSideDivElements[0].focus()

    document.addEventListener('click', (event) => {
      if (window.lastFocusedDiv) {
        window.lastFocusedDiv.focus();
      }
      else{
        leftSideDivElements[0].focus()
      }
    })

    leftSideDivElements.forEach((div, index) => {
      div.addEventListener('focus', (e) => {
          window.lastFocusedDiv = div;
      });

      div.addEventListener("keydown", (e)=>{
        console.log("keydown", e);
        
        if(e.keyCode == 37){
          if((index + 3)%3 != 0){
            leftSideDivElements[index-1].focus()
          }
        }
        else if(e.keyCode == 38){
          if((index - 3) >= 0){
            leftSideDivElements[index-3].focus()
          }
        }
        else if(e.keyCode == 39){
          if((index + 1)%3 != 0){
            leftSideDivElements[index+1].focus()
          }
          else{
            if(window.testLastElementsStack){
              window.testLastElementsStack.focus()
            }
            else{
              document.getElementById("rightSideContainer").querySelector(".rightSide").focus()
            }
            window.testLastElementsStack = leftSideDivElements[index]
            leftSideDivElements[index].classList.add("lastFocus")
          }
        }
        else if(e.keyCode == 40){
          if((index + 3) < 9){
            leftSideDivElements[index+3].focus()
          }
        }

      })
    })

    return(
      leftSideDivElements.forEach(div => {
        div.removeEventListener('focus', (e) => {
          window.lastFocusedDiv = div;
        });
        div.removeEventListener("keydown", (e)=>{
          console.log("keydown", e);
          
          if(e.keyCode == 37){
            if((index + 3)%3 != 0){
              leftSideDivElements[index-1].focus()
            }
          }
          else if(e.keyCode == 38){
            if((index - 3) >= 0){
              leftSideDivElements[index-3].focus()
            }
          }
          else if(e.keyCode == 39){
            if((index + 1)%3 != 0){
              leftSideDivElements[index+1].focus()
            }
          }
          else if(e.keyCode == 40){
            if((index + 3) < 9){
              leftSideDivElements[index+3].focus()
            }
          }
  
        })
      })
    )

  },[])

  return(
    <div className="leftSideContainer" id="leftSideContainer">
      <div className="leftSideDiv" tabIndex={1} >1</div>
      <div className="leftSideDiv" tabIndex={1} >2</div>
      <div className="leftSideDiv" tabIndex={1} >3</div>
      <div className="leftSideDiv" tabIndex={1} >4</div>
      <div className="leftSideDiv" tabIndex={1} >5</div>
      <div className="leftSideDiv" tabIndex={1} >6</div>
      <div className="leftSideDiv" tabIndex={1} >7</div>
      <div className="leftSideDiv" tabIndex={1} >8</div>
      <div className="leftSideDiv" tabIndex={1} >9</div>
    </div>
  )
}