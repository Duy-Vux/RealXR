import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ApplePayIcon from 'react-native-vector-icons/FontAwesome';
import PayPalIcon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';




const sampleItems = [
  { name: 'Item 1', cost: 10.99 },
  { name: 'Item 2', cost: 20.49 },
  { name: 'Item 3', cost: 30.75 },
];


const CheckoutPage = () => {
  const [showCardForm, setShowCardForm] = useState(false); 
  const [cardNumber, setCardNumber] = useState('');

  const [cartItems, setCartItems] = useState(sampleItems);
  const [totalCost, setTotalCost] = useState(
    sampleItems.reduce((sum, item) => sum + item.cost, 0)
  );

  const handleRemoveItem = (index) => {
    const newCartItems = [...cartItems];
    const removedItem = newCartItems.splice(index, 1)[0];
    setCartItems(newCartItems);
    setTotalCost(totalCost - removedItem.cost);
  };

  const handlePayWithCard = () => {
    setShowCardForm(prevShowCardForm => !prevShowCardForm);
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.cartContainer}>
        <Text style={styles.cartTitle}>Cart</Text>
        {cartItems.map((item, index) => (
          <View style={styles.cartItem} key={index}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCost}>${item.cost.toFixed(2)}</Text>
            <TouchableOpacity onPress={() => handleRemoveItem(index)}>
              <Icon name="x" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        ))}

        <Text style={styles.totalCost}>Total: ${totalCost.toFixed(2)}</Text>
      </View>
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentTitle}>Payment Options</Text>

        
        <TouchableOpacity style={styles.payButton} onPress={handlePayWithCard}>
          <Icon name="credit-card" size={20} color="#666" />
          <Text style={styles.payButtonText}> Pay with Card</Text>
        </TouchableOpacity>






        {showCardForm && (
          <View style={[styles.cardForm, { marginBottom: 20 }]}>
              <View style={styles.cardFormInputRow}>
              <FontAwesome name="credit-card" size={20} color="#444" style={styles.cardIcon} />
              <TextInput 
                placeholder="1234-5678-9012-3456" 
                style={styles.cardFormInput}
                maxLength={19}
                keyboardType="numeric"
                onChangeText={text => {
                  const formattedText = text.replace(/\s?/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
                  setCardNumber(formattedText);
                }}
                value={cardNumber}
              />
            </View>
            <View style={styles.cardFormRow}>
              <TextInput 
                placeholder="Expiration Date - MM/YY" 
                style={[styles.cardFormInput, styles.expirationDateInput]} 
                maxLength={5} 
                keyboardType="numeric"
              />
              <TextInput 
                placeholder="CVC" 
                style={[styles.cardFormInput, styles.cvcInput]} 
                maxLength={3} 
                keyboardType="numeric"
              />
            </View>

            <TextInput 
              placeholder="Name on Card" 
              style={styles.cardFormInput} 
              maxLength={30} 
            />
            <TouchableOpacity style={[styles.cardFormButton, {backgroundColor: '#333', paddingBottom: 10}]}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>Pay</Text>
            </TouchableOpacity>
          </View>
        )}











        <TouchableOpacity style={styles.payButton}>
          <PayPalIcon name="paypal" size={30} color="#00457C" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.payButton}>
          <ApplePayIcon name="apple" size={30} color="#000000" />
        </TouchableOpacity>




      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartContainer: {
    width: '90%',
    backgroundColor: '#2E2E2E',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  cardNumberLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#2E2E2E',
    padding: 10,
    borderRadius: 5,
  },
  itemName: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  itemCost: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  removeItem: {
    backgroundColor: '#3D3D3D',
    padding: 10,
    borderRadius: 5,
  },
  emptyCart: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
    color: '#FFFFFF',
  },
  totalCost: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#FFFFFF',
  },
  paymentContainer: {
    width: '90%',
    backgroundColor: '#2E2E2E',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  paymentTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  payButton: {
    flexDirection: 'row',
    backgroundColor: '#3D3D3D',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  payButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  cardFormInput: {
    height: 40,
    borderColor: '#3D3D3D',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 40,
    marginBottom: 10,
    color: '#FFFFFF',
  },
  cardIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    color: '#FFFFFF',
  },
  cardFormRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  expirationDateInput: {
    flex: 1,
    marginRight: 5,
  },
  cvcInput: {
    flex: 1,
    marginLeft: 5,
  },
  cardFormButton: {
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardFormButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
});

  

export default CheckoutPage;  




