import * as React from "react";

export interface IFlexBoxSampleLayoutProps {}

export default class FlexBoxSampleLayout extends React.Component<
  IFlexBoxSampleLayoutProps,
  any
> {
  public render() {
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          flexFlow: "row norwap",
          padding: "10px"
        }}
      >
        <div
          style={{
            backgroundColor: "gray",
            flex: "1 1 80%",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
          }}
        >
          FirstFirstFirstFirstFirstFirstFiFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstrstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirst
        </div>
        <div
          style={{
            flex: "1 1 20%",
            backgroundColor: "yellow",
            display: "flex",
            minWidth: 0
          }}
        >
          <div
            style={{
              flex: 1
            }}
          >
            Right Content
          </div>
        </div>
      </div>
    );
  }
}
