import React from 'react';
import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import Container from '../component/Container';
import Label from '../component/Label';
import ScreenHeader from '../component/ScreenHeader';


export default function Orders({navigation}) {
  const OrderCard = ({item}) => {
    const {label, amount, status, color} = item;
    return (
      <View style={styles.contentContiner}>
        <View>
          <Label
            text={label}
            style={{fontSize: 18, fontWeight: '500'}}
          />
          <Label
            text={amount}
            style={{
              label: 'Justin Tim',
              amount: '$35',
              status: 'Used',
              color: 'green',   
              
              label: 'Selena Gomez',
              amount: '$45',
              status: 'Pending',
              color: 'blue',
                      
            }
            }
          />
          <Pressable
            style={{
              borderRadius: 3,
              width: '85%',
              paddingVertical: 10,
              backgroundColor: "#007363",
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Label
              text={status}
              style={{fontSize: '14', color: "#FFFFFF"}}
            />
          </Pressable>
        </View>
        <View>
          <FlatList
           
            nestedScrollEnabled
            ItemSeparatorComponent={() => <View style={{padding:2}} />}
            data={[1, 2, 3, 4]}
            numColumns={2}
            keyExtractor={(item) => `${item}_${new Date().getTime()}_${item}`}
            renderItem={({item}) => (
              <View
                key={item}
                style={{
                  backgroundColor:"#005700",
                  height: 35,
                  width: 35,
                  marginLeft: 4,
                  borderRadius: 3,
                }}
              />
            )}
          />
        </View>
      </View>
    );
  };
  

  return (
    <Container >
      <ScreenHeader navigation={navigation} label="Past Orders" />
      
      <View style={{paddingVertical: 20}}>
        <Label
          text="Sept 23, 2021"
          style={{opacity: 0.5, fontSize: 13}}
        />
      </View>
      <OrderCard
        item={{
          label: 'Justin Tim',
          amount: '$40',
          status: 'Used',
          color: 'green',
        }}
      />
     
      
     <View style={{paddingVertical: 20}}>
        <Label
          text="Sept 23, 2021"
          style={{opacity: 0.5, fontSize: 13}}
        />
      </View>
      <OrderCard
        item={{
          label: 'Selena Gomez',
          amount: '$40',
          status: 'Pending',
          color: 'blue',
        }}
      />

      <View style={{paddingVertical: 20}}>
        <Label
          text="January 23, 2021"
          style={{opacity: 0.5, fontSize: 13}}
        />
      </View>
      <OrderCard
        item={{
          label: 'Adele',
          amount: '$50',
          status: 'Canceled',
          color: 'red',
        }}
      />

<View style={{paddingVertical: 20}}>
        <Label
          text="January 23, 2021"
          style={{opacity: 0.5, fontSize: 13}}
        />
      </View>
      <OrderCard
        item={{
          label: 'Adele',
          amount: '$50',
          status: 'Canceled',
          color: 'red',
        }}
      />



      <View style={{flex:1, paddingVertical:20}}>
      <View style={{paddingVertical: 20}}>
        <Label
          text="March 23, 2023"
          style={{opacity: 0.5, fontSize: 13}}
        />
      </View>
      <FlatList
      keyExtractor={(item)=> `${item.label}_${new Date().getTime()}_${item.amount}`}
        ItemSeparatorComponent={() => <View style={{padding: 5}} />}
        data={{label: 'Bad Bunny',
        amount: '$3503',
        status: 'In transit',
        color: 'yellow',}}
        renderItem={({item, index}) => <OrderCard key={index} item={item} />}
      />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  contentContiner: {
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    
  },
});