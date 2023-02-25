import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import SearchCards from "../components/SearchCard";

export default function Home() {
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [dataBysearch, setDataBysearch] = useState([]);

  const pageSize = 10;
  const totalPageCount = Math.ceil(data.length / pageSize);

  async function fetchData() {
    const response = await axios.get(`https://api.spacexdata.com/v3/capsules`);
    setOriginalData(response.data);
    setData(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleSearch(event) {
    setSearchQuery(event.target.value);
  }

  function filterByStatus(status) {
    // Filter the original data based on the status
    const filteredData = originalData.filter((Capsule) => Capsule.status === status);
    // Update the state with the filtered data
    setData(filteredData);
  }

  function filterByOriginalRelease(originalLaunch) {
    // Filter the original data based on the original launch
    const filteredData = originalData.filter(
      (Capsule) => Capsule.original_launch === originalLaunch
    );
    // Update the state with the filtered data
    setData(filteredData);
  }

  function filterByType(type) {
    // Filter the original data based on the type
    const filteredData = originalData.filter((Capsule) => Capsule.type === type);
    // Update the state with the filtered data
    setData(filteredData);
  }

  const startIndex = (currentPage - 1) * pageSize;
  const visibleData = data.slice(startIndex, startIndex + pageSize);

  async function fetchByQuery() {
    const response = await axios.get("https://api.spacexdata.com/v3/capsules");
    setOriginalData(response.data);
    setData(response.data);
  }

  useEffect(() => {
    fetchByQuery();
  }, [searchQuery]);

  async function fetchBysearch() {
    const response = await axios.get(
      `https://api.spacexdata.com/v3/capsules?capsule_serial=${searchQuery}`
    );
    setDataBysearch(response.data);
  }

  return (
    <div className="w-fit">
      <Nav />
      <Hero />
      <Search
        handleSearch={handleSearch}
        fetchBysearch={fetchBysearch}
        filterByOriginalRelease={filterByOriginalRelease}
        filterByType={filterByType}
        filterByStatus={filterByStatus}
      />
      <div className="w-full h-max flex gap-5 flex-wrap justify-center sm:justify-start p-3">
        {searchQuery
          ? dataBysearch.map((item) => (
              <SearchCards
                key={item.capsule_serial}
                data={item}
                year={new Date(item.original_launch).getFullYear()}
              />
            ))
          : visibleData.map((item) => (
              <Card
                key={item.capsule_serial}
                data={item}
                year={new Date(item.original_launch).getFullYear()}
              />
            ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPageCount={totalPageCount}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
