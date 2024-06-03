import {Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateCollection from './create_collection';
import CabinetCollectionStore from './cabinet_collection_store';

const FullWidthTabs = () => {
  const tabStyle = {
    width: '80vw',
    margin: '0 auto',
  };
  return (
    <div className='tabstyle'>
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className='custom-tabs'>
        <Tab eventKey="home" title="Your collections" className='p-4 tabs'>
          <CabinetCollectionStore/>
        </Tab>
        <Tab eventKey="profile" title="Create new collection" className='p-4'>
          <CreateCollection/>
        </Tab>
        <Tab eventKey="contact" title="Account settings" className='p-4'>
          <div>This section is being updated</div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default FullWidthTabs;