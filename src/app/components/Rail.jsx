"use client"
import { useEffect } from "react"
import "./Rail.css"

export default function Rail (){
    let count = 0
    let firstMove = true
    
    useEffect(()=>{
        let RailItems = document.getElementById("RailContainer").querySelectorAll(".RailItem")
        RailItems[0].focus()
        RailItems[0].classList.add("active")
        console.log("asdfg", RailItems)

        function keyNavigation(e){
            if(e.keyCode == 37){
                if(count > 0){
                    RailItems[--count].focus()
                }
            }
            else if(e.keyCode == 39){
                if(count < RailItems.length){
                    console.log("keyNavigation");
                    count += 1;
                    RailItems[count].focus()
                    if(count > 1){
                        if(firstMove){
                            firstMove = false
                            document.getElementById("RailContainer").scrollLeft += 200;
                        }
                        else{
                            document.getElementById("RailContainer").scrollLeft += 350;
                        }
                    }
                }
            }
        }

        RailItems.forEach(element => {
            element.addEventListener("keydown", (e)=>{keyNavigation(e)} )
        });

        return(
            RailItems.forEach(element => {
                element.removeEventListener("keydown", keyNavigation )
            }) 
        )


    }, [])


    return(
        <div className="RailContainer overflow-x-hidden flex bg-blue-500x" id="RailContainer">
            <div className="RailItem" tabIndex={0}>1</div>
            <div className="RailItem" tabIndex={0}>2</div>
            <div className="RailItem" tabIndex={0}>3</div>
            <div className="RailItem" tabIndex={0}>4</div>
            <div className="RailItem" tabIndex={0}>5</div>
            <div className="RailItem" tabIndex={0}>6</div>
            <div className="RailItem" tabIndex={0}>7</div>
            <div className="RailItem" tabIndex={0}>8</div>
            <div className="RailItem" tabIndex={0}>9</div>
            <div className="RailItem" tabIndex={0}>10</div>
        </div>
    )
}

