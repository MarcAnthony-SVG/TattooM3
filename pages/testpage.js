import Layout from "../components/Layout";
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
const TestPage = () => {
    
  return (
    <Layout>
      <h1>This is a test page</h1>
      <div>
        <button >Test 1</button>
      </div>
      <div>
        <button>Test 2</button>
      </div>
      <div>
        <button>Test 3</button>
      </div>
    </Layout>
  );
};
export default TestPage;
