import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector} from "react-redux";
import {useHistory} from "react-router-dom";


const api = axios.create({
    baseURL: `http://localhost:8080/api`
})

export default function AddCardMountain() {
    const auth = useSelector(state => state.auth);
    const history = useHistory();

    if (!auth.login)
        history.replace('/');



    const [mountain, setMountain] = useState({
        name: '',
        description: '',
        height: '',
        range: '',
        image: ''
    });

    const sendData = () => {

        const config = {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        };
        api.post(`/addNewMountain`, mountain, config)
            .then(r => {
                console.log("Wysłane mountain");
                setMountain({
                    name: '',
                    description: '',
                    height: '',
                    range: '',
                    image: ''})
                file = "";

            });
    }


    const submitFunction = e => {
        e.preventDefault();
        sendData();

    }
    let file ="";
    const onFileChange = async (event) => {
        //setFile(event.target.files[0]);
        file = event.target.files[0];


        const resp = (file) =>new Promise((resolve, reject) =>{
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        })


        const dataURL = await resp(file);
        setMountain({...mountain, image: dataURL})
        }


    return (


        <Styles className="container">
            <form role="form" onSubmit={submitFunction} className=" d-flex row justify-content-center align-content-center" >
                <div className="col-7 py-1">
                    <input className="form-control input-sm"
                           type="text"
                           name="name"
                           value={mountain.name}
                           placeholder="name"
                           onChange={e => setMountain({...mountain, name: e.target.value})}
                           required/>
                </div>

                <div className="col-7 py-1">
                <textarea
                    className="form-control input-sm"
                    name="description"
                    value={mountain.description}
                    placeholder="description"
                    onChange={e => setMountain({...mountain, description: e.target.value})}
                    required/>
                </div>


                <div className="col-7 py-1">
                    <input className="form-control input-sm"
                           type="number"
                           name="height"
                           value={mountain.height}
                           placeholder="height"
                           onChange={e => setMountain({...mountain, height: e.target.value})}
                           required/>
                </div>

                <div className="col-7 py-1">
                    <input className="form-control input-sm"
                           type="text"
                           name="range"
                           value={mountain.range}
                           placeholder="range"
                           onChange={e => setMountain({...mountain, range: e.target.value})}
                           required/>
                </div>
                <div className="col-7 py-1">
                    <input className="form-control input-sm col-7"
                           onChange={onFileChange}
                           type="file"/>
                </div>

                <div className="col-7 p-1 d-flex justify-content-center">
                    <button type="submit" className="btn-primary col-2 border-warning">
                        add
                    </button>
                </div>

            </form>

        </Styles>
    );


}

const Styles = styled.div`
  align-items: center;
  .img-fluid {
    //height: 30rem;
    object-fit: cover;
  }
`;
