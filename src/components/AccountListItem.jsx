import { IonItem, IonLabel, IonNote, IonIcon } from '@ionic/react';
import { eyeOutline,eyeOffOutline, closeOutline } from 'ionicons/icons';
import {ContextVars} from './Global';
import React, {useContext} from 'react';
import './AccountListItem.css';


const AccountListItem = ({ conta }) => {
	const [visible, setVisible] = React.useState(false);
  const {accounts, setAccounts} = useContext(ContextVars);

  const deleteItem = (id) => {
    setAccounts( accounts.filter(acc => {return acc.id != id}));
  }

  return (
    <IonItem >
      <IonLabel className="ion-text-wrap">
        <h2>
          {conta.local}
          <span className="controls">
             <IonIcon onClick={() =>{setVisible(!visible)}} slot="end" icon={visible ? eyeOffOutline : eyeOutline} />
             <IonIcon onClick={() => {deleteItem(conta.id)}} slot="end" icon={closeOutline} />
          </span>
        </h2>
	        <h3>{conta.login}</h3>
	        <p>
	          {visible ? conta.senha : "••••••••••"}
	        </p>
      </IonLabel>
    </IonItem>
  );
};

export default AccountListItem;
