const ShopServiceCard = ({ shopService }) => {
    const { ServiceServiceType, ServiceProductDescription, UnitType, UnitPrice, MinimumQty, IsHomeServiceAvailable, HomeServiceCost, UpdateDt } = shopService;
  
    return (
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <div className="card-body">
          <h2 className="card-title">{ServiceServiceType}</h2>
          
          <p>{ServiceProductDescription}</p>
          <p>{UnitType}: {UnitPrice}</p>
          <p>সর্বনিম্ন পরিমাণ: {MinimumQty}</p>
          <p>হোম সেবা উপলব্ধ: {IsHomeServiceAvailable ? 'Yes' : 'No'}</p>
          {IsHomeServiceAvailable && <p>হোম সেবা খরচ: {HomeServiceCost}</p>}
          <p>আপডেট তারিখ: {UpdateDt}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ShopServiceCard;
  