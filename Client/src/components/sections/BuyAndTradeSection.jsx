import React from 'react';

import buyIcon from '../../images/illustrations/buy.png';
import PrimaryButton from '../../components/buttons/PrimaryButton';

export default function BuyAndTradeSection() {

  return (
    <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex items-center">
          <div className="max-w-xl">
            <h2 className="font-bold text-4xl mb-6 leading-normal">Buy & trade on the <br /> original crypto exchange.</h2>
            <p className="text-gray mb-6">Buy now and get 40% extra bonus Minimum pre-sale amount <br /> 25 Crypto Coin. We accept BTC crypto-currency</p>

            <PrimaryButton className="w-full">
              Dummy Button
            </PrimaryButton>
          </div>
        </div>
        <div className='row-start-1 md:col-start-2'>
            <img src={buyIcon} alt="" />
        </div>
      </div>
    </section >
  );
}
