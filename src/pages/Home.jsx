//import MessageListItem from '../components/MessageListItem';
import AccountListItem from '../components/AccountListItem';
import { useState, useEffect, useContext } from 'react';
import {ContextVars} from '../components/Global';
import { contas, contasFiltradas } from '../data/contas';
import {
  IonContent,
  IonHeader,
  IonList,
  IonIcon,
  IonLabel,
  IonItem,
  IonListHeader,
  IonInput,
  IonFab,
  IonFabButton,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import { addOutline, searchOutline } from 'ionicons/icons'
import './Home.css';

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [texto, setTexto] = useState('');
  const {accounts, setAccounts, contasFiltradas} = useContext(ContextVars);
  const [listaFiltrada, setListaFiltrada] = useState([]);

  useEffect(() =>{
    setListaFiltrada(texto == '' ? accounts : contasFiltradas(texto, accounts));
  }, [texto, accounts]);

  const refresh = (e) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonList lines="none">
        <IonListHeader>
          <IonTitle>Bem-vindo de volta</IonTitle>
        </IonListHeader>
        <IonListHeader>
          <IonInput value={texto} placeholder="Pesquisar" onIonChange={e => setTexto(e.detail.value)} clearInput>
            <IonIcon slot="end" icon={searchOutline} />
          </IonInput>
        </IonListHeader>
          {listaFiltrada.map(c => <AccountListItem key={c.id} conta={c} />)}
        </IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="dark" routerLink={`/additem`}>
              <IonIcon icon={addOutline} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;


