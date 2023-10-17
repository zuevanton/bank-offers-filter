import './App.css';
import MyCheckBox from './UI/myCheckBox';
import MyRadioButton from './UI/myRadioButton';
import MyRangeInput from './UI/myRangeInput';
import offersData from './offers';
import { useState } from 'react';

function App() {
  const [offers, setOffers] = useState(offersData.offers.list)
  const [minInitialPayment, setMinInitialPayment] = useState(10)
  const [propertyType, setPropertyType] = useState('COTTAGE')
  const [objectType, setObjectType] = useState('all')
  const [term, setTerm] = useState(5)
  const [banks, setBanks] = useState(['bank-vtb-new', 'bank-alfa', 'bank-delta', 'bank-domrf', 'bank-gpb', 'bank-open'])

  let filteredOffers = offers.filter(offer => offer.minInitialPayment <= minInitialPayment / 100)
    .filter(offer => offer.requirements.find(item => item.key === 'PROPERTY_TYPE')?.value === propertyType)
    .filter(offer => offer.minTerm <= term * 12 && offer.maxTerm >= term * 12)
    .filter(offer => banks.includes(offer.bankId))
  
  if(objectType !== 'all') {
    filteredOffers = filteredOffers.filter(offer => offer.product === objectType)
  }

  return (
    <div className="App">
      <MyRangeInput 
        title='Первоначальный взнос'
        min={10}
        max={80}
        buttons={[10, 15, 20, 25, 50, 80]}
        unit='%'
        value={minInitialPayment}
        onChange={setMinInitialPayment}
      />

      <MyRangeInput 
        title='Срок кредита'
        min={5}
        max={20}
        buttons={[5, 10, 15, 20]}
        unit='лет'
        value={term}
        onChange={setTerm}
      />

      <MyCheckBox 
        title='Банк'
        values={['bank-vtb-new', 'bank-alfa', 'bank-delta', 'bank-domrf', 'bank-gpb', 'bank-open']}
        inputTitles={{
          'bank-vtb-new': 'ВТБ',
          'bank-alfa': 'Альфа-банк',
          'bank-delta': 'дельта банк',
          'bank-domrf': 'Дом рф',
          'bank-gpb': 'Газпром Банк',
          'bank-open': 'Банк открытие',
        }}
        active={banks}
        onChange={setBanks}
      />

      <MyRadioButton 
        title='тип жилья' 
        values={['COTTAGE', 'FLAT', 'APARTMENTS']}
        inputTitles={{
          COTTAGE: 'Дом',
          FLAT: 'Квартира',
          APARTMENTS: 'Апартаменты'
        }}
        value={propertyType}
        onChange={setPropertyType}
      />

      <MyRadioButton 
        title='тип объекта' 
        values={['all', 'USED', 'NEW']}
        inputTitles={{
          all: 'Все',
          USED: 'Вторичка',
          NEW: 'Новостройка'
        }}
        value={objectType}
        onChange={setObjectType}
      />

      Количество офферов: {filteredOffers.length}
      {filteredOffers.map(offer => {
        return (
          <div key={offer.offerId}>
            <p>Банк {offer.bankId}</p>
            <p>айди {offer.offerId}</p>
            <p>ставка {offer.rate}</p>
            <p>стартовый взнос {offer.minInitialPayment}</p>
            <hr />
          </div>
        )
      })}
      
    </div>
  );
}

// {
//   bankId: 'bank-vtb-new',   ←←←←←←
//   offerId: '8b51b98f-2eb8-4950-af5b-270e39c51445',  ←←←←←←←←←←
//   type: 'MORTGAGE',
//   product: 'NEW',
//   creditProgram: '',
//   rate: 0.122,                ←←←←←←←←←←
//   minInitialPayment: 0.2,       ←←←←←←←←←←←←
//   maxInitialPayment: 0.9999,
//   maxPayment: 266733,
//   minAmount: 500000,
//   maxAmount: 25548322,
//   minTerm: 12,
//   maxTerm: 360,
//   requirements: [
//     {
//       key: 'PROPERTY_TYPE',
//       value: 'FLAT'
//     }
//   ],
//   features: [],
//   expireAt: '2023-01-12T05:54:54.316'
// },

export default App;
