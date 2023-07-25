import { TbCurrencyTaka } from "react-icons/tb";
import { BiHome } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { FaTag } from "react-icons/fa6";
const ShopServiceCard = ({ shopService, baseUrl }) => {
  const { Icon, ServiceServiceType, ServiceProductDescription, UnitType, UnitPrice, UnitIcon, MinimumQty, IsHomeServiceAvailable, HomeServiceCost, UpdateDt } = shopService;
  const assetUrl = baseUrl + '/ShopPublicImages/asset/';
  return (
    <div className="card w-96 bg-base-100 shadow-xl">

      <div className="card-body">
        <h2 className="card-title "> <figure><img src={assetUrl + Icon} className="p-4" alt="Shoes" style={{ width: '60px' }} /></figure> {ServiceServiceType}</h2>

        <p className="font-extrabold">{ServiceProductDescription}</p>
        <div className="flex justify-between">
          <p className="flex justify-start items-center gap-1"> <FaTag className="transform rotate-90 text-red-300"></FaTag> ফি: <TbCurrencyTaka ></TbCurrencyTaka><span className="">{UnitPrice}</span> প্রতি {UnitType}</p>
          <p className="flex items-center gap-1"><FaTag className="transform rotate-90 text-red-300"></FaTag> সর্বনিম্ন পরিমাণ: {MinimumQty}</p>
        </div>
        <div className="flex justify-between items-center gap-7">
          <div className="flex items-center gap-1">
            <BiHome></BiHome>
            <p className="flex items-center gap-1">হোম সার্ভিস:{IsHomeServiceAvailable ?
              <AiOutlineCheckCircle className="text-green-500">
              </AiOutlineCheckCircle> : <RxCrossCircled className="text-red-500"></RxCrossCircled>}
              {IsHomeServiceAvailable && <p className="flex items-center"><TbCurrencyTaka></TbCurrencyTaka>{HomeServiceCost}</p>}
            </p>
          </div>

        </div>

        <small>সর্বশেষ হালনাগাদ: {UpdateDt}</small>
        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary">Buy Now</button> */}
        </div>
      </div>
    </div>
  );
};

export default ShopServiceCard;
