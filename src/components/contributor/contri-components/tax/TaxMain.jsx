import Tax1 from './Tax1';
import Tax2 from './Tax2';
import Tax3 from './Tax3';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setpath2 } from '../../../../store/contriPathSlice';

const TaxMain = () => {
  const [component, setcomponent] = useState('tax1');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setpath2('/ Tax'));
  }, []);

  const changeTax2 = () => {
    setcomponent('tax2');
  };

  const changeTax3 = () => {
    setcomponent('tax3');
  };

  let componentToRender;
  if (component === 'tax1') {
    componentToRender = <Tax1 changeTax2={changeTax2} />;
  } else if (component === 'tax2') {
    componentToRender = <Tax2 changeTax3={changeTax3} />;
  } else if (component === 'tax3') {
    componentToRender = <Tax3 />;
  }
  return <>{componentToRender}</>;
};

export default TaxMain;
