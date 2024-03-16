import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './App.css';

const NewPagination = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, [currentPage, itemsPerPage, searchTerm]);

    const fetchPosts = () => {
        axios.get(`https://gatewaystaging.devinfinitylearn.in/api/v1/tenant/list?products=1&page=${currentPage}&limit=${itemsPerPage}`, {
            headers: {
                accept: "application/json",
                "product-id": 1000,
                "tenant-id": 1,
            },
        }).then((response) => {
            console.log(response.data);
            setPosts(response.data.tenants);
            setTotalPages(response.data.totalPages);
            setLimit(response.data.limit);
            filterPosts(response.data.tenants);
        }).catch(error => {
            console.error('Error fetching tenant data:', error);
        });
    };

    const filterPosts = (allPosts) => {
        if (searchTerm === '') {
            setFilteredPosts(allPosts);
        } else {
            const filtered = allPosts.filter(post => post.tenant_name.toLowerCase().includes(searchTerm.toLowerCase()));
            setFilteredPosts(filtered);
        }
    };

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    const handleItemsPerPageChange = (event) => {
        const newItemsPerPage = parseInt(event.target.value);
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1); // Reset to the first page when changing items per page
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="abc">
            <input
                type="text"
                placeholder="Search Tenant Name..."
                onChange={handleSearch}
                className="input-search"
            />
            <div className="table-container">
            <table className="table">
                <thead className="header">
                    <tr className="hi">
                        <th>Tenant Name</th>
                        <th>Tenant ID</th>
                        <th>Tenant Code</th>
                        <th>Created By</th>
                    </tr>
                </thead>
                <tbody className="tabledata">
                    {filteredPosts.map((data, i) => (
                        <tr className="hi" key={i}>
                            <td>{data.tenant_name}</td>
                            <td>{data.tenant_id}</td>
                            <td>{data.tenant_code}</td>
                            <td>{data.created_by}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <div className="pagination-container">
                
                    <Pagination count={totalPages} color="primary" onChange={handlePageChange} />
                
                <Select
                    value={itemsPerPage}
                    onChange={handleItemsPerPageChange}
                >
                    <MenuItem value={10}>10 per page</MenuItem>
                    <MenuItem value={20}>20 per page</MenuItem>
                    <MenuItem value={30}>30 per page</MenuItem>
                </Select>
            </div>
        </div>
    );
};

export default NewPagination;
