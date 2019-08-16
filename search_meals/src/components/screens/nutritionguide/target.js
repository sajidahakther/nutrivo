import React from 'react';
import { View } from 'react-native';
import { Accordion } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const dataArray = [
{
  title: 'Fibre',
  content: 'Fiber is a type of carbohydrate that cannot be digested and has 2 forms, soluble and insoluble. Eating fiber helps you feel satiated (feeling full for longer) and promotes bowel health. Good sources of fiber include whole grains, beans, bran and broccoli.',
},
{
  title: 'Vitamin D',
  content: 'Vitamin D is essential for your bones to be able to absorb calcium, keeping them strong and healthy. It can also be naturally synthesized when your skin is exposed to the sun.',
},
{
  title: 'Potassium',
  content: 'Potassium (along with sodium) helps maintain fluid balance in the body; it also promotes muscle function and communication between cells.',
},
{
  title: 'Calcium',
  content: 'Calcium not only builds strong bones and teeth, but it also plays a vital role in muscle movement.'
},
{
  title: 'Iron',
  content: 'Iron is key in how we handle oxygen: it moves oxygen around the body, stores it for future use, and even helps clean up the damaging byproducts left behind by oxygen-using bodily processes. Good sources of iron include lean meats, beans, tofu, and dark/leafy greens.',
},
{
  title: 'Vitamin A',
  content: 'Vitamin A is important for boosting vision and promoting normal cell function. It can only be absorbed through fat.',
},
{
  title: 'Vitamin C',
  content: 'Vitamin C helps to build collagen (a protein that strengthens skin and muscles) and performs damage control on free radicals (harmful substances that are byproducts of normal bodily processes).',
}
];

const Target = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
      <Accordion
        dataArray={dataArray}
        renderContent={this._renderContent}
        headerStyle={{ backgroundColor: '#F4F4F4' }}
        contentStyle={{ backgroundColor: '#FFFFFF' }}
      />
      </View>
    </Provider>
  );
};

export default Target;
