import styled from "styled-components";
import {useEffect, useState} from "react";
import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:8080`
})

export default function Notification() {
    const [status, setStatus] = useState(false);
    const [noti, setNoti] = useState("")
    const [timer, setTimer] = useState(false)
    const [spamer, setSpamer]=useState([
        "Dziś jest słoneczna pogoda w Tatrach. Temperatura dziś wynosi 23 stopni. ",
        "15 odwiedzających poleca dziś szczyt Leskowiec. Wybierz się i Ty ;)",
        "Uwaga!! Dziś w Bieszczadach jest burzowo i niebezpiecznie !!!"


    ])
    const changeStatus = (stat) => {
        setStatus(stat);
    }
    const changeTimer = () => {
        if (timer === true) {
            changeStatus(false);
            setTimer(false);

        } else {
            getNotification().then(()=>{
                if(noti!==""){
                changeStatus(true);
                }
            });
            setTimer(true);


        }
    }


    const getNotification = async () => {
        await api.get("/rabbit/receiveNotification").then(response => {
            if(response.data!=="")
            setNoti(response.data)
            else{
                changeStatus(false);
            }
        })

    }

    const sendNotification = () =>{
        api.get(`/rabbit/addNotification?message=${randSpamer()}`)
    }


    const randSpamer = () =>{
        return  spamer[Math.floor(Math.random() * spamer.length)];
    }

    useEffect(() => {

        setTimeout(changeTimer,20000);
        sendNotification();

    }, [timer]);


    return (

        <NotificationWrapper status={status}>
            <div>
                <div className="toastHeader">
                    <strong className="me-auto pl-3"> Super Wiadomość!!!</strong>
                    <i onClick={() => changeStatus(false)} className="far fa-times-circle"/>
                </div>
                <div className="toastBody">
                    <p onClick={() => changeStatus(false)}>{noti}</p>
                </div>
            </div>

        </NotificationWrapper>


    )
}


const NotificationWrapper = styled.div`
  width: 20%;
  position: absolute;
  bottom: 1.5em;
  right: 1.5em;
  z-index: 5;
  background: rgba(241, 187, 158,0.8);
  border-radius: 0.25em;
  padding: 0.5em;
  border: 1px solid black;
  display: ${(props) => props.status ? "block" : "none"};

  .toastHeader {
    display: flex;
    justify-content: space-between;
  }

  i {
    cursor: pointer;
  }

  .toastBody > p {
    word-wrap: break-word;
  }



`
