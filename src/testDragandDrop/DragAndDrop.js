import React, { useEffect, useState } from 'react';
import './style.css'

function DragAndDrop(props) {
    const[dragStart,setDragStart]=useState(null);
    const[bottles,setBottles]=useState([
        {id:"c1S1R1C1",className:"rouge",text:"R1C1"},
        {id:"c1S1R1C2",className:"rouge",text:"R1C2"},
        {id:"c1S1R1C3",className:"vide",text:"R1C3"},
        {id:"c1S1R1C4",className:"vide",text:"R1C4"},
        {id:"c1S1R1C5",className:"vide",text:"R1C5"},
        {id:"c1S1R1C6",className:"vide",text:"R1C6"},
        {id:"c1S1R2C1",className:"rouge",text:"R1C1"},
        {id:"c1S1R2C2",className:"rouge",text:"R1C2"},
        {id:"c1S1R2C3",className:"vide",text:"R1C3"},
        {id:"c1S1R2C4",className:"vide",text:"R1C4"},
        {id:"c1S1R2C5",className:"vide",text:"R1C5"},
        {id:"c1S1R2C6",className:"vide",text:"R1C6"},
        {id:"c1S1R3C1",className:"vide",text:"R1C1"},
        {id:"c1S1R3C2",className:"rouge",text:"R1C2"},
        {id:"c1S1R3C3",className:"vide",text:"R1C3"},
        {id:"c1S1R3C4",className:"vide",text:"R1C4"},
        {id:"c1S1R3C5",className:"rouge",text:"R1C5"},
        {id:"c1S1R3C6",className:"vide",text:"R1C6"},
        {id:"c1S1R4C1",className:"rouge",text:"R1C1"},
        {id:"c1S1R4C2",className:"vide",text:"R1C2"},
        {id:"c1S1R4C3",className:"vide",text:"R1C3"},
        {id:"c1S1R5C4",className:"vide",text:"R1C4"},
        {id:"c1S1R5C5",className:"vide",text:"R1C5"},
        {id:"c1S1R5C6",className:"vide",text:"R1C6"}
    ])

    if(window.addEventListener && dragStart){
        let list=document.getElementsByClassName('vide');
        for(let i=0;i<list.length;i++){
            document.getElementById(list[i].id).addEventListener('dragover',dragOver);
            document.getElementById(list[i].id).addEventListener('dragenter',dragEnter);
            document.getElementById(list[i].id).addEventListener('dragleave',dragLeave);
        }        
    }
    function dragOver(e){
        e.preventDefault();
        return false
    }
    function dragEnter(e){
        console.log(e.target.id)
        //e.target.className="vide dragEnter"

    }
    function dragLeave(e){
        console.log(e.target.id)
        //e.target.className="vide"
    }
    function depot(e){
        let changeData=[...bottles]
        changeData.forEach(element=>{
            if(element.id===e.target.id){
                element.className=document.getElementById(dragStart).className;                
            }
            if(element.id===dragStart){
                element.className="vide"
            }
        })
        setBottles(changeData)
        setDragStart(null)
    };

    return (
        <div className='shelf'>
            {bottles.map((element,index)=>{
                return <div key={index} id={element.id} className={element.className} 
                draggable={element.className==="vide"?false:true} 
                onDrop={(e)=>{depot(e)}}
                onDragStart={(e)=>{setDragStart(e.target.id)}}
                onTouchStart={(e)=>{setDragStart(e.target.id)}}
                title={"Corton Charlemagne "}
                >{element.text}</div>
            })}
        </div>       
    );
}

export default DragAndDrop;