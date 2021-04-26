import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";


const api = axios.create({
    baseURL: `http://localhost:8080`
})

export default function AddCardMountain() {

    const [mountain, setMountain] = useState({
        name: '',
        description: '',
        height: '',
        range: ''
    });

    const [file, setFile] = useState('');

    const sendData = () => {

        api.post(`http://localhost:8080/mountain/addNewMountain`, mountain)
            .then(r => {
                console.log("Wysłane mountain");
            });
    }

    const sendFile = async () => {

        let data = new FormData();
        data.append('file', file);
        data.append('name', file.name);

        const resp = await api.post(`http://localhost:8080/mountain/addFile`, data);

        if (resp.data != null) {
            sendData();
        }


    }

    const submitFunction = e => {
        e.preventDefault();
        sendFile();
        //sendData();

    }

    const onFileChange = (event) => {
        setFile(event.target.files[0]);
    }

    return (


        <Styles className="container">
            <form role="form" onSubmit={submitFunction} className=" d-flex row justify-content-center align-content-center" >
                <div className="col-7 py-1">
                    <input className="form-control input-sm"
                           type="text"
                           name="name"
                           placeholder="name"
                           onChange={e => setMountain({...mountain, name: e.target.value})}
                           required/>
                </div>

                <div className="col-7 py-1">
                <textarea
                    className="form-control input-sm"
                    name="description"
                    placeholder="description"
                    onChange={e => setMountain({...mountain, description: e.target.value})}
                    required/>
                </div>


                <div className="col-7 py-1">
                    <input className="form-control input-sm"
                           type="number"
                           name="height"
                           placeholder="height"
                           onChange={e => setMountain({...mountain, height: e.target.value})}
                           required/>
                </div>

                <div className="col-7 py-1">
                    <input className="form-control input-sm"
                           type="text"
                           name="range"
                           placeholder="range"
                           onChange={e => setMountain({...mountain, range: e.target.value})}
                           required/>
                </div>
                <div className="col-7 py-1">
                    <input className="form-control input-sm col-7"
                           onChange={e => setFile(e.target.files[0])}
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
