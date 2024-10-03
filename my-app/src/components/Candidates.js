
import React, { useState, useEffect } from 'react';
import './Candidates.css';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

function Candidates() {
  const [candidatesList, setCandidatesList] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const candidatesPerPage = 5;
  const fetchCandidates = async (selectedPage = 0) => {
    try {
      const response = await axios.get(`http://localhost:3002/api/Candidates/`);
      const candidates = response.data;
      console.log(candidates);
      const pageCount = Math.ceil(candidates.length / candidatesPerPage);
      setPageCount(pageCount);
      const startIndex = selectedPage * candidatesPerPage;
      const endIndex = startIndex + candidatesPerPage;
      setCandidatesList(candidates.slice(startIndex, endIndex));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  const handlePageClick = (selectedPage) => {
    fetchCandidates(selectedPage.selected); // Fetch candidates for the selected page
  };

  return (
    <div className='candidate'>
     <h1>Candidate Lists</h1>
      {candidatesList.length > 0 && (
        <div>
          <table className="candidate-table">
            <thead>
              <tr>
                <th>Serial No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date of Birth</th>
                <th>Your Skill</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {candidatesList.map((candidate, index) => (
                <tr key={candidate.id} >
                  <td className='paddin'>{index + 1}</td>
                  <td className='paddin'>{candidate.name}</td>
                  <td className='paddin'>{candidate.email}</td>
                  <td className='paddin'>{candidate.dateOfBirth}</td>
                  <td className='paddin'>{candidate.selectedEvent}</td>
                  <td className='paddin'>{candidate.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination-container">
            <ReactPaginate
              pageCount={pageCount}
              pageRangeDisplayed={5}
              marginPagesDisplayed={2}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              activeClassName={'active'}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Candidates;
