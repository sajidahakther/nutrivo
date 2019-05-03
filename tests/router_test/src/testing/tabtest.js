<Scene key="MacronutrientsScreen">
  <Tabs
    key="macronutrients"
    swipeEnabled
    showLabel
    tabBarPosition='top'
    tabBarStyle={{ backgroundColor: '#ffffff' }}
    labelStyle={{ color: '#000000' }}
    indicatorStyle={{ backgroundColor: '#ededed' }}
    activeBackgroundColor="white"
    navBar={GuideNavBar} // create a function
    lazy
  >
    <Scene
      key="carbohydrate"
      component={CarbohydrateScreen} // create the screen in carbohydratescreen.js
      title="Carbohydrate"
      tintColor={'#ededed'}
      hideNavBar
      back={false}
    />
    <Scene
      key="protein"
      component={ProteinScreen}
      title="Protein"
      tintColor={'#ededed'}
      hideNavBar
      back={false}
    />
    <Scene
      key="fat"
      component={FatScreen}
      title="Fat"
      tintColor={'#ededed'}
      hideNavBar
      back={false}
    />
  </Tabs>
</Scene>
