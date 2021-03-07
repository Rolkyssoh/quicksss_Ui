import * as React from 'react';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { useBoolean } from '@uifabric/react-hooks';

import './modal.styles.scss';


const modalPropsStyles = { main: { maxWidth: 450 } };
const iconProps = { iconName: 'IncreaseIndentLegacy' };
// const dialogContentProps = {
//   type: DialogType.normal,
//   title: 'Numéro de l\'annonceur',
//   subText: 'Numéro ici',
// };

const MyModal = ({texte, giveContent, outMargin}) => {
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
  const modalProps = React.useMemo(
    () => ({
      isBlocking: true,
      styles: modalPropsStyles,
    }),
  );

  return (
    <>
      <PrimaryButton secondaryText="Opens the Sample Dialog" onClick={toggleHideDialog} text={texte} className={ outMargin && "button-margin" } />
      <Dialog
        hidden={hideDialog}
        onDismiss={toggleHideDialog}
        // className="container-dialog"
        dialogContentProps={{
            type: DialogType.normal,
            title: 'Numéro de l\'annonceur',
            subText: `${giveContent}`
        }}

        modalProps={modalProps}
      >
        <DialogFooter>
          <DefaultButton onClick={toggleHideDialog} text="Fermer" />
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default MyModal
