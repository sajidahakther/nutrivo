import React from 'react';
import { View } from 'react-native';
import { Accordion } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
// import LimitList from './components/limitlist';

const dataArray = [
{
  title: 'Sugar',
  content: "Sugars are found naturally in most foods, but are also refined into what's known as added sugar. Limiting added sugars in your diet is always encouraged.",
},
{
  title: 'Trans Fat',
  content: 'Eating foods that have high trans fat, or that contain partially hydrogenated fats (like margarine and shortening), can increase your risk for heart disease.',
},
{
  title: 'Cholesterol',
  content: 'Cholesterol is a fat-based substance that is important for many bodily functions. However, too much cholesterol in your diet can increase your risk for heart disease.',
},
{
  title: 'Sodium',
  content: 'Sodium (along with potassium) helps balance fluid levels in the body. However, too much sodium can cause your body to retain too much fluid, leading to increased blood pressure.',
},
{
  title: 'Saturated Fat',
  content: 'Eating too much saturated fat can increase your bad (LDL) cholesterol levels, which can increase your risk for heart disease.',
}
];

const Limit = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Accordion
          dataArray={dataArray}
          renderContent={this._renderContent}
          headerStyle={{ backgroundColor: '#F4F4F4' }}
          contentStyle={{ backgroundColor: '#FFFFFF' }}
        />

        {/* <LimitList /> */}
      </View>
    </Provider>
  );
};

export default Limit;
