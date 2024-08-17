import React from 'react';

const PricingTable = () => {
  const pricingData = [
    { api: 'OpenAI', model: 'GPT-3.5', price: '$0.002' },
    { api: 'OpenAI', model: 'GPT-4', price: '$0.03' },
    { api: 'Together AI', model: 'Llama-2-70b', price: '$0.0008' },
    { api: 'Together AI', model: 'Llama-2-13b', price: '$0.0006' },
  ];

  return (
    <main className="p-4">
      {/* Header Section */}
      <header className="bg-primary text-white py-4">
        <h1 className="text-3xl font-bold text-center">API Pricing</h1>
      </header>

      {/* Description */}
      <section className="my-8 text-center">
        <p className="text-base sm:text-lg mb-8">
          Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:
        </p>
      </section>

      {/* Pricing Table */}
      <section className="overflow-x-auto mb-8">
        <table className="min-w-full bg-transparent border border-border">
          <thead>
            <tr>
              <th className="py-2 sm:py-3 px-2 sm:px-6 bg-gray-800 font-semibold text-text text-xs sm:text-base">API</th>
              <th className="py-2 sm:py-3 px-2 sm:px-6 bg-gray-800 font-semibold text-text text-xs sm:text-base">Model</th>
              <th className="py-2 sm:py-3 px-2 sm:px-6 bg-gray-800 font-semibold text-text text-xs sm:text-base">
                Price per 1K tokens
              </th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((item, index) => (
              <tr key={index} className="bg-background border-b border-border">
                <td className="py-2 sm:py-3 px-2 sm:px-6 text-text text-xs sm:text-base">{item.api}</td>
                <td className="py-2 sm:py-3 px-2 sm:px-6 text-text text-xs sm:text-base">{item.model}</td>
                <td className="py-2 sm:py-3 px-2 sm:px-6 text-text text-xs sm:text-base">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Token Estimation Section */}
      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-primary">Token Estimation</h2>
        <p className="text-sm sm:text-base">
          On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token
          calculator tool.
        </p>
      </section>

      {/* Billing Section */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-primary">Billing</h2>
        <p className="text-sm sm:text-base">
          You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly.
          Detailed usage reports are available in your account dashboard.
        </p>
      </section>
    </main>
  );
};

export default PricingTable;
