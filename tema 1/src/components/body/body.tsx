import React from "react";

export default class Body extends React.Component<{ data: string }> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">
          nothing to see here
        </a>
        {this.props.data}
      </div>
    );
  }
}
