import React from "react";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";

import TableHeader from "./components/row-header";
import TableRowItem from "./components/row-item";
import { loadMoreItems, MIN_ITEMS } from "./helpers";

const DataContext = React.createContext();

/**
 * App Component
 */
class App extends React.PureComponent {
  // default state
  state = { data: [], itemCount: MIN_ITEMS };

  // prepare data context value
  contextValue = () => ({
    data: this.state.data,
    setData: data => this.setState({ data, itemCount: data.length + 1 }),
    itemCount: this.state.itemCount
  });

  render() {
    return (
      <DataContext.Provider value={this.contextValue()}>
        <AutoSizer defaultHeight={450} defaultWidth={200}>
          {({ height, width }) => (
            <React.Fragment>
              <TableHeader width={width} />
              <DataContext.Consumer>
                {({ data, setData, itemCount }) => (
                  <InfiniteLoader
                    isItemLoaded={index => !!data[index]}
                    itemCount={itemCount}
                    loadMoreItems={startIndex =>
                      loadMoreItems({
                        startIndex,
                        data,
                        setData
                      })
                    }
                  >
                    {({ onItemsRendered, ref }) => (
                      <FixedSizeList
                        className="List"
                        height={height}
                        width={width}
                        itemData={data}
                        itemCount={itemCount}
                        itemSize={30}
                        onItemsRendered={onItemsRendered}
                        ref={ref}
                      >
                        {TableRowItem}
                      </FixedSizeList>
                    )}
                  </InfiniteLoader>
                )}
              </DataContext.Consumer>
            </React.Fragment>
          )}
        </AutoSizer>
      </DataContext.Provider>
    );
  }
}

export default App;
