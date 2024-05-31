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
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Your collections" className='p-4'>
          <CabinetCollectionStore/>
        </Tab>
        <Tab eventKey="profile" title="Create new collection" className='p-4'>
          <CreateCollection/>
        </Tab>
        <Tab eventKey="contact" title="This section is being updated" className='p-4'>
          <div></div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default FullWidthTabs;