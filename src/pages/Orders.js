import React from 'react';
import Container from '../component/Container';
import Label from '../component/Label';
import ScreenHeader from '../component/ScreenHeader';
import {View, Text, StyleSheet, FlatList, Pressable, ScrollView, Image} from 'react-native';
//import Label from '../component/Label';

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
              }
              }
          />
           
         
          <Pressable
            style={{
              borderRadius: 3,
              width: '85%',
              paddingVertical: 10,
              paddingHorizontal: '10%',
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
 
 
        <Image
              source={{ uri: "https://picsum.photos/200/300" }}
              style={{ width: 90, height: 90, borderRadius: 25,              marginLeft: 4,
                marginLeft: '20%',
              }}
          />
 
 
          <View
            key={item}
           
            style={{
              height: 35,
              width: 35,
              marginLeft: 4,
              borderRadius: 3,
             
            }}
          />
        </View>
       
       
    );
  };
   return (
    <Container >
      <ScreenHeader navigation={navigation} label="Past Orders" />
      <ScrollView>
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
          text="January 24th, 2021"
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
 
 
 
 
      </ScrollView>
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

