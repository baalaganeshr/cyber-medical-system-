import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../style.css';

const TransactionView = () => {
  const location = useLocation();
  // Get data from navigation state or use defaults/mock data
  const { 
    hash = "0xd1f3a74659f8c6eb2d6b3846cd4f5b5b91b8d7e0c4b2a8d11c8e1d6c8b9a5f3e",
    from = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", 
    to = "CyberMedRecords", 
    blockNumber = 19453892,
    cid = "QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTf4bH2G76f5Xk",
    contentHash = "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"
  } = location.state || {}; // If no state, use defaults (e.g. direct access)

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100%', padding: '40px 20px' }}>
      <div className="transaction-card" style={{ background: '#f8f9fa', margin: '0 auto', padding: '0', boxShadow: 'none' }}>
        <div className="transaction-title">Transaction Details</div>
        
        <div className="status-indicator">
          <div className="status-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{width: '14px', height: '14px'}}>
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          Success
        </div>

        <div className="transaction-row">
          <div className="transaction-label">Transaction hash</div>
          <div className="transaction-value">{hash}</div>
        </div>
        
        <div className="transaction-row">
          <div className="transaction-label">From</div>
          <div className="transaction-value">{from}</div>
        </div>
        
        <div className="transaction-row">
          <div className="transaction-label">To</div>
          <div className="transaction-value">{to}</div>
        </div>
        
        <div className="transaction-row">
          <div className="transaction-label">Block number</div>
          <div className="transaction-value">{blockNumber}</div>
        </div>
        
        <div className="transaction-row">
          <div className="transaction-label">Contents</div>
          <div className="transaction-value">
            <div>cid: ipfs://{cid}</div>
            <div>contentHash: {contentHash}</div>
          </div>
        </div>

        <div className="status-box">
          <div className="status-box-header">Status</div>
          <div className="status-box-value">Success</div>
        </div>

        <div style={{marginTop: '20px', textAlign: 'center'}}>
            <Link to="/gallery" style={{color: '#007bff', textDecoration: 'none'}}>← Back to Gallery</Link>
        </div>
      </div>
    </div>
  );
};

export default TransactionView;