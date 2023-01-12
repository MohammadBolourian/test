import * as React from 'react';
import './search.scss'
import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

export const Search = () => {
    const [value, setValue] = useState("");
    const [data, setData] = useState([]);

    const onChange = (event) => {
        setValue(event.target.value);
    };

    useEffect(()=>{
        const fetchData = async () => {
            try {
                await axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.get(`/api/showJobs`).then((result) => {
                        setData([...data,...result.data.data])
                    })
                });
            } catch (e) {
                toast.error('در ارتباط با سرور مشکلی پیش اومده!');
            }
        }
        fetchData();
    },[])
    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        // our api to fetch the search result

        console.log("search ", searchTerm);
    };
    return (
        <div className={'text-center px-5 w-100'}>
            <div className="input-group mb-3 w-50 mx-auto">
                <input
                    type="text"
                    value={value} onChange={onChange}
                    className="form-control "
                    placeholder="search"

                />
                <button className="btn btn-outline-primary" type="button" id="button-addon2"
                        data-mdb-ripple-color="dark"
                        onClick={() => onSearch(value)}
                >
                    Button
                </button>
            </div>
            <div className="dropdown">
                {data
                    .filter((item) => {
                        const searchTerm = value;
                        const fullName = item.name;

                        return (
                            searchTerm &&
                            fullName.startsWith(searchTerm) &&
                            fullName !== searchTerm
                        );
                    })
                    .slice(0, 10)
                    .map((item) => (
                        <div
                            onClick={() => onSearch(item.name)}
                            className="dropdown-row"
                            key={item.name}
                        >
                            {item.name}
                        </div>
                    ))}
            </div>
        </div>
    );
};