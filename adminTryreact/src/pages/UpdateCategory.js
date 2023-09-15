import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreateCategory from "./CreateCategory";
import axios from 'axios'; // Import Axios

const UpdateCategory = () => {
    const { id } = useParams();
    const [category, setCategory] = useState();

    useEffect(() => {
        // let data = JSON.stringify({
        //     "id": id
        // });

        // let config = {
        //     method: 'post', // Use POST method
        //     maxBodyLength: Infinity,
        //     url: `${host}/Event/getEventById`,
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     data: data
        // };

        // axios.request(config)
        //     .then((response) => {
        //         empdatachange(response.data); // Update state with response data
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

        let data = JSON.stringify({
            "id":id
        });
    
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:8000/getCategoryById',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
    
        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setCategory(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]); // Include id in the dependency array



   

    return (
        category ?
            <CreateCategory data={category} />
            :
            <h3>Loading....</h3>
    );
}

export default UpdateCategory;
