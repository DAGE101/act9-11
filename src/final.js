import React, { useState, useEffect } from 'react';
import ProductManagement from './ProductManagement';
import CategoryManagement from './CategoryManagement';
import TransactionManagement from './TransactionManagement';
import StocksManagement from './StocksManagement';
import TransactionReport from './TransactionReport';

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch initial data from API or local storage
    // Set initial state for products, categories, and transactions
  }, []);

  return (
    <div>
      <Tabs>
        <Tab label="Products">
          <ProductManagement
            products={products}
            setProducts={setProducts}
            categories={categories}
          />
        </Tab>
        <Tab label="Categories">
          <CategoryManagement
            categories={categories}
            setCategories={setCategories}
          />
        </Tab>
        <Tab label="Transactions">
          <TransactionManagement
            products={products}
            transactions={transactions}
            setTransactions={setTransactions}
          />
        </Tab>
        <Tab label="Stocks">
          <StocksManagement
            products={products}
            setProducts={setProducts}
          />
        </Tab>
        <Tab label="Reports">
          <TransactionReport transactions={transactions} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;