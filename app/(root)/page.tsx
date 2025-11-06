import { TradingViewWidget } from "@/components/TradingViewWiget";
import { HEATMAP_WIDGET_CONFIG, MARKET_DATA_WIDGET_CONFIG, TOP_STORIES_WIDGET_CONFIG } from "@/lib/constants";
import React from "react";

const Home = () => {
  const getScriptUrl = (widget: string) => {
    return `https://s3.tradingview.com/external-embedding/embed-widget-${widget}.js`;
  };
  return (
    <div className="flex min-h-screen home-wrapper">
      <section className="grid w-full gap-8 home-section">
        <div className="md:col-span-1 xl:col-span-1">
          <TradingViewWidget
            title="Market Overview"
            scriptUrl={getScriptUrl("market-overview")}
            config={MARKET_DATA_WIDGET_CONFIG}
            className="custom-chart"
          />
        </div>
        <div className="md:col-span-1 xl:col-span-2">
          <TradingViewWidget
            title="Stock Heatmap"
            scriptUrl={getScriptUrl("stock-heatmap")}
            config={HEATMAP_WIDGET_CONFIG}
          />
        </div>
      </section>
      <section className="grid w-full gap-8 home-section">
        <div className="h-full md:col-span-1 xl:col-span-1">
          <TradingViewWidget
            scriptUrl={getScriptUrl("timeline")}
            config={TOP_STORIES_WIDGET_CONFIG}
            className="custom-chart"
          />
        </div>
        <div className="h-full md:col-span-1 xl:col-span-2">
          <TradingViewWidget scriptUrl={getScriptUrl("market-quotes")} config={MARKET_DATA_WIDGET_CONFIG} />
        </div>
      </section>
    </div>
  );
};

export default Home;
