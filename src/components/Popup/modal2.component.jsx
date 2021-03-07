import * as React from 'react';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TooltipHost, ITooltipHostStyles } from 'office-ui-fabric-react/lib/Tooltip';
import { useId } from '@uifabric/react-hooks';

// const styles: Partial<ITooltipHostStyles> = { root: { display: 'inline-block' } };
const calloutProps = { gapSpace: 0 };

const MyModal2 = ({ texte, giveContent}) => {
  // Use useId() to ensure that the ID is unique on the page.
  // (It's also okay to use a plain string and manually ensure uniqueness.)
  const tooltipId = useId('tooltip');

  return (
    <div>
      <TooltipHost
        content={giveContent}
        // Give the user more time to interact with the tooltip before it closes
        closeDelay={200000}
        id={tooltipId}
        calloutProps={calloutProps}
        // styles={styles}
        // className="container-modal"
      >
        <PrimaryButton aria-describedby={tooltipId}>{texte}</PrimaryButton>
      </TooltipHost>
    </div>
  );
};

export default MyModal2;