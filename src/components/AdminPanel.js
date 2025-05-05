import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AdminContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const AdminHeader = styled.h2`
  margin-bottom: 1.5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.5rem;
`;

const TableHead = styled.thead`
  background-color: #f1f1f1;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 0.75rem;
  border: 1px solid #ddd;
`;

const TableHeader = styled.th`
  padding: 0.75rem;
  border: 1px solid #ddd;
  text-align: left;
`;

const Button = styled.button`
  background-color: #FF6B6B;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  margin-right: 1rem;
  
  &:hover {
    background-color: #ff5252;
  }
`;

const AdminPanel = () => {
  const [entries, setEntries] = useState([]);
  
  useEffect(() => {
    // Load entries from localStorage
    const storedEntries = JSON.parse(localStorage.getItem('waitlistEntries') || '[]');
    setEntries(storedEntries);
  }, []);
  
  const exportToCSV = () => {
    // Create CSV content
    const headers = ['Name', 'Email', 'Timestamp'];
    const csvRows = [
      headers.join(','),
      ...entries.map(entry => 
        [
          `"${entry.name}"`, 
          `"${entry.email}"`, 
          `"${entry.timestamp}"`
        ].join(',')
      )
    ];
    
    const csvContent = csvRows.join('\n');
    
    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `flavorly-waitlist-${new Date().toISOString().slice(0,10)}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const clearEntries = () => {
    if (window.confirm('Are you sure you want to clear all waitlist entries? This cannot be undone.')) {
      localStorage.removeItem('waitlistEntries');
      setEntries([]);
    }
  };
  
  return (
    <AdminContainer>
      <AdminHeader>Waitlist Entries ({entries.length})</AdminHeader>
      
      <div style={{ marginBottom: '1rem' }}>
        <Button onClick={exportToCSV}>Export to CSV</Button>
        <Button onClick={clearEntries} style={{ backgroundColor: '#e74c3c' }}>Clear All</Button>
      </div>
      
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Timestamp</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {entries.length > 0 ? (
            entries.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.name}</TableCell>
                <TableCell>{entry.email}</TableCell>
                <TableCell>{new Date(entry.timestamp).toLocaleString()}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} style={{ textAlign: 'center' }}>No entries yet</TableCell>
            </TableRow>
          )}
        </tbody>
      </Table>
    </AdminContainer>
  );
};

export default AdminPanel;