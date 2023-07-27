import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Map from './components/Map';
import FormInput from './components/FormInput';
import RegionInfo from './components/RegionInfo';
import NightModeToggle from './components/NightModeToggle'; 
import store from './redux/store';
import { setRegionData } from './redux/actions';
import { toggleNightMode } from './redux/actions'; 

const App = () => {
  const dispatch = useDispatch();
  const nightMode = useSelector((state) => state.nightMode);

  const handleRegionSelect = (region) => {
    // Manually defined region data for the "United States"
    const regionData = {
      currency: 'USD',
      speedUnits: 'mph',
      distanceUnits: 'miles',
      timezones: ['UTC-5', 'UTC-6', 'UTC-7', 'UTC-8'],
    };

    // Dispatch the region data to the Redux store
    dispatch(setRegionData(regionData));
  };

  return (
    <Provider store={store}>
      <div className={`App ${nightMode ? 'night-mode' : ''}`}>
        <Header />
        <Sidebar />
        <div className="content">
          <FormInput onSelectRegion={handleRegionSelect} />
          <Map />
          <RegionInfo />
        </div>
        <Footer />
        <NightModeToggle />
      </div>
    </Provider>
  );
};

export default App;
