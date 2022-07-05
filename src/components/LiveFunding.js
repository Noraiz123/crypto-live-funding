import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../constants';

const SortIconSvg = ({ setSortType, sortType }) => {
  return (
    <div className='sortIcons'>
      <i
        className={`fa-solid fa-sort-up ${sortType === 'desc' && 'sort-grey'}`}
        onClick={() => setSortType('desc')}
      ></i>
      <i
        className={`fa-solid fa-sort-down ${sortType === 'asc' && 'sort-grey'}`}
        onClick={() => setSortType('asc')}
      ></i>
    </div>
  );
};

const LiveFunding = () => {
  const [fundings, setFundings] = useState([]);
  const [sortType, setSortType] = useState('asc');

  useEffect(() => {
    axios.get(API_URL).then((res) => setFundings(res.data));
  }, []);

  return (
    <div className='main-bg'>
      <h1 className='main-title'>Funding Rates</h1>
      <div className='funding-table'>
        <table>
          <thead className='table-head'>
            <tr>
              <th>Symbol</th>
              <th className='align-center'>
                <img src='https://cdn.coinglasscdn.com/static/exchanges/524.png' alt='FTF' />
                &nbsp; FTF <SortIconSvg setSortType={setSortType} sortType={sortType} />
              </th>
            </tr>
          </thead>
          <tbody style={{ height: '400px', overflowY: 'auto' }}>
            {fundings &&
              fundings
                .sort((a, b) => (sortType === 'asc' ? a.rate - b.rate : b.rate - a.rate))
                .map((e, i) => (
                  <tr key={e.future + '-' + i}>
                    <td>{e.future.replace('-PERP', '')}</td>
                    <td>{e.rate}%</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveFunding;
