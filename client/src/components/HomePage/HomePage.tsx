import React from 'react';
import './HomePage.scss';

export const HomePage: React.FC = () => (
  <article className="HomePage">
    <div  className="HomePage__image" />
    <h1 className="HomePage__title">What Is a Stock Ticker?</h1>
    <h5 className="HomePage__autor">
      By ADAM HAYES 
      <span className="HomePage__autor--date">Updated December 25, 2021</span>
    </h5>
    <p>
      As anyone who has ever watched a financial network or
      checked out a market web site knows,
      security prices, particularly those of stocks, are frequently on the move.
      A stock ticker is a report of the price of certain securities,
      updated continuously throughout the trading
      session by the various stock market exchanges.
    </p>
    <p>
      A &laquo;tick&raquo; is any change in the price of the security,
      whether that movement is up or down.
      A stock ticker automatically displays these ticks,
      along with other relevant information, like trading volume,
      that investors and traders use to stay informed about
      current market conditions and the interest in that particular security.
    </p>
    <ul className="HomePage__list">
      KEY TAKEAWAYS
      <li className="HomePage__item">
        A stock ticker reports transaction and price data for a security,
        updated continuously throughout the day.
        </li>
      <li className="HomePage__item">
        A stock ticker typically reports on the most active
        securities or ones making headlines on a given day.
      </li>
      <li className="HomePage__item">
        The ticker typically shows the ticker symbol,
        the price change and percentage change from the previous 
        session&#39;s close, and often the volume of the shares being traded
      </li>
      <li className="HomePage__item">
        Some tickers color code information to reflect the direction of
        the price, with green for higher, red for lower, 
        and a neutral color like gray or tan for no change.
      </li>
    </ul>
  </article>
);
