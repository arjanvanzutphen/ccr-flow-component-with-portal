import React from "react";
import ReactDOM from "react-dom";

interface ImportItemProps {
  setIsFlowItemViewVisible: (state: boolean) => void;
  isFlowItemViewVisible: boolean;
  children: any;
}

class FlowItemViewPortal extends React.Component<ImportItemProps> {
  private el: HTMLCalciteFlowItemElement;

  constructor(props: ImportItemProps) {
    super(props);
    this.el = document.createElement(
      "calcite-flow-item"
    ) as HTMLCalciteFlowItemElement;
    this.el.id = "calcite-flow-item-view";
    this.el.heading = "2nd Flow item";
    // this.el.closed = props.isImportItemVisible
    this.el.closed = !props.isFlowItemViewVisible;
    this.el.addEventListener("calciteFlowItemBack", () => {
      props.setIsFlowItemViewVisible(false);
      this.el.closed = true;
      document.getElementById("import-item-list-panel")?.remove();
    });
  }

  componentDidMount(): void {
    const flowNode = document.getElementById(
      "example-flow"
    ) as unknown as HTMLCalciteFlowElement;
    flowNode?.appendChild(this.el);
  }

  render() {
    return ReactDOM.createPortal([this.props.children], this.el);
  }
}

export default FlowItemViewPortal;
