import { useState, useContext, } from 'react';
import {ContextVars} from '../components/Global';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonButton,
  IonItem,
  IonInput,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  IonGrid
} from '@ionic/react';
import { planetOutline, personOutline,  } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewMessage.css';

function ViewMessage() {
  const { accounts, setAccounts } = useContext(ContextVars);
  const [l_local, setLocal] = useState('');
  const [l_login, setLogin] = useState('');
  const [l_senha, setSenha] = useState('');

  const saveAccount = () =>{
    const acc = {
      id: accounts.length+1,
      local:l_local,
      login:l_login,
      senha:l_senha
    };
    var temp = [...accounts, acc];
    setAccounts(temp);
  };

  return (
    <IonPage id="view-message-page">
      <IonContent fullscreen>
        <IonGrid>
        <IonTitle>Adicionar conta</IonTitle>
        <br />
        <IonLabel style={{paddingLeft:15}} position="stacked">Local</IonLabel>
        <IonItem>
          <IonInput value={l_local} onIonChange={(e) => {setLocal(e.detail.value)} }></IonInput>
        </IonItem>
        <IonLabel style={{paddingLeft:15}} position="stacked">Usuario</IonLabel>
        <IonItem>
          <IonInput value={l_login} onIonChange={(e) => {setLogin(e.detail.value)} }></IonInput>
        </IonItem>
        <IonLabel style={{paddingLeft:15}} position="stacked">Senha</IonLabel>
        <IonItem>
          <IonInput value={l_senha} onIonChange={(e) => {setSenha(e.detail.value)} }></IonInput>
        </IonItem>
        </IonGrid>
        <IonGrid style={{padding:10}}>
          <IonButton size="large" color="dark" >
            <IonBackButton text="Cancelar" defaultHref="/home"></IonBackButton>
          </IonButton>
          <IonButton size="large" color="dark" routerLink="/home" onClick={() =>{saveAccount()}}>Salvar</IonButton>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default ViewMessage;
