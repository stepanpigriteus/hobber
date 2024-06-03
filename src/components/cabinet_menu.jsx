import {Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateCollection from './create_collection';
import CabinetCollectionStore from './cabinet_collection_store';
import { useTranslation } from 'react-i18next';

const FullWidthTabs = () => {
  const { t } = useTranslation();
  const tabStyle = {
    width: '80vw',
    margin: '0 auto',
  };
  return (
    <div className='tabstyle'>
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className='custom-tabs'>
        <Tab eventKey="home" title={t('tabsYourCollection')} className='p-4 tabs'>
          <CabinetCollectionStore/>
        </Tab>
        <Tab eventKey="profile" title={t('tabsCreateCollection')} className='p-4'>
          <CreateCollection/>
        </Tab>
        <Tab eventKey="contact" title={t('tabsAccountSettings')} className='p-4'>
          <div>{t('tabsAccountContent')} </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default FullWidthTabs;