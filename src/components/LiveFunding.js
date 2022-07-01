import React from 'react';

const LiveFunding = () => {
  return (
    <div className=''>
      <h1 className='main-title'>Funding Rates</h1>
      <table className='funding-table'>
        <thead>
          <th>Symbol</th>
          <th>
            <img src='https://cdn.coinglasscdn.com/static/exchanges/524.png' alt='FTF' />
            &nbsp; FTF
          </th>
        </thead>
        <tbody>
          <tr>
            <td>BTC</td>
            <td>0.0003%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LiveFunding;
