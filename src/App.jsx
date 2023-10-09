import React, { useState } from "react";
import {
  CalciteShell,
  CalciteShellPanel,
  CalcitePanel,
  CalciteActionBar,
  CalciteAction,
  CalciteBlock,
  CalciteFlow,
  CalciteFlowItem,
  CalciteButton,
} from "@esri/calcite-components-react";
import { setAssetPath } from "@esri/calcite-components/dist/components";

import FlowItemViewPortal from "./FlowItemViewPortal";

import "@esri/calcite-components/dist/calcite/calcite.css";
import FlowItemContentView from "./FlowItemContentView";

// CDN hosted assets
setAssetPath("https://unpkg.com/@esri/calcite-components/dist/calcite/assets");

function App() {
  const [isFlowItemViewVisible, setIsFlowItemViewVisible] = useState(false);

  const showNextFlowItemComponent = () => {
    setIsFlowItemViewVisible(true);
  };

  const FlowItemViewWrapper = isFlowItemViewVisible ? (
    <FlowItemViewPortal
      setIsFlowItemViewVisible={setIsFlowItemViewVisible}
      isFlowItemViewVisible={isFlowItemViewVisible}
    >
      <FlowItemContentView />
    </FlowItemViewPortal>
  ) : null;

  return (
    <CalciteShell>
      <CalciteShellPanel
        slot="panel-start"
        position="start"
        id="shell-panel-start"
      >
        <CalciteActionBar slot="action-bar">
          <CalciteAction text="Home" icon="home"></CalciteAction>
        </CalciteActionBar>
        <CalciteFlow id="example-flow">
          <CalciteFlowItem heading="Flow component">
            <CalciteBlock heading="Block 1" open>
              This is block content
              <CalciteButton
                onClick={() => {
                  showNextFlowItemComponent();
                }}
                width="full"
              >
                Go to next flow item component
              </CalciteButton>
            </CalciteBlock>
          </CalciteFlowItem>
          {FlowItemViewWrapper}
        </CalciteFlow>
      </CalciteShellPanel>

      <CalcitePanel heading="Content"></CalcitePanel>
    </CalciteShell>
  );
}

export default App;
