import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const sampleItems = [
  { name: 'Item 1', cost: 10.99 },
  { name: 'Item 2', cost: 20.49 },
  { name: 'Item 3', cost: 30.75 },
];

const CheckoutPage = () => {
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
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>Pay with Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>PayPal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>ApplePay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F0F0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cartContainer: {
      width: '90%',
      backgroundColor: '#FFFFFF',
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
    cartTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    cartItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
      backgroundColor: '#FFFFFF',
      padding: 10,
      borderRadius: 5,
    },
    itemName: {
      fontSize: 18,
    },
    itemCost: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    removeItem: {
      backgroundColor: '#F0F0F0',
      padding: 10,
      borderRadius: 5,
    },
    emptyCart: {
      fontSize: 18,
      fontStyle: 'italic',
      textAlign: 'center',
      marginTop: 20,
    },
    totalCost: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
    },
    paymentContainer: {
      width: '90%',
      backgroundColor: '#FFFFFF',
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
    },
    paymentTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    payButton: {
      backgroundColor: '#F0F0F0',
      padding: 15,
      borderRadius: 5,
      marginBottom: 10,
    },
    payButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  

export default CheckoutPage;  




/*import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import CartItem from "../component/CartItem";
import PaymentOption from "../component/PaymentOption";
import BillingAddress from "../component/BillingAddress";
import PayPalButton from "../component/PayPalButton";
import ApplePayButton from "../component/ApplePayButton";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Item 1',
      price: 10,
    },
    {
      id: 2,
      name: 'Item 2',
      price: 20,
    },
    {
      id: 3,
      name: 'Item 3',
      price: 30,
    },
  ]);
  const [paymentOption, setPaymentOption] = useState('Credit Card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [billingAddress, setBillingAddress] = useState({
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
  });
  const [email, setEmail] = useState('');
  const [cardNumberError, setCardNumberError] = useState(null);
  const [expiryDateError, setExpiryDateError] = useState(null);
  const [cvvError, setCVVError] = useState(null);

  const handlePaymentOptionChange = (option) => {
    setPaymentOption(option);
  };

  const handleCardNumberChange = (value) => {
    setCardNumber(value);
  };

  const handleExpiryDateChange = (value) => {
    setExpiryDate(value);
  };

  const handleCVVChange = (value) => {
    setCVV(value);
  };

  const handleBillingAddressChange = (address) => {
    setBillingAddress(address);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePayPalSuccess = () => {
    console.log('PayPal payment successful');
  };

  const handleDeleteCartItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };
  

  const handleAddCartItem = (item) => {
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
  };
  

  const renderCartItems = () => {
    return cartItems.map((item, index) => (
      <CartItem
        key={item.id}
        index={index}
        item={item}
        onDelete={handleDeleteCartItem}
      />
    ));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  
  return (
      <Text>Checkout Page</Text>
  );
  

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <View style={styles.cart}>
        <Text style={styles.cartTitle}>Cart</Text>
        {renderCartItems()}
        <View style={styles.cartTotal}>
          <Text style={styles.cartTotalLabel}>Total:</Text>
          <Text style={styles.cartTotalAmount}>${total}</Text>
        </View>
      </View>
      <View style={styles.paymentOptions}>
        <Text style={styles.paymentOptionsLabel}>Payment Options:</Text>
        <PaymentOption
          option="Credit Card"
          selected={paymentOption === 'Credit Card'}
          onPress={() => handlePaymentOptionChange('Credit Card')}
        />
        <PaymentOption
          option="PayPal"
          selected={paymentOption === 'PayPal'}
          onPress={() => handlePaymentOptionChange('PayPal')}
        />
        <PaymentOption
          option="Apple Pay"
          selected={paymentOption === 'Apple Pay'}
          onPress={() => handlePaymentOptionChange('Apple Pay')}
        />
      </View>
      {paymentOption === 'Credit Card' && (
        <View style={styles.creditCard}>
          <TextInput
            style={styles.creditCardInput}
            onChangeText={handleCardNumberChange}
            value={cardNumber}
            placeholder="Card Number"
          />
          {cardNumberError && <Text style={styles.error}>{cardNumberError}</Text>}
          <View style={styles.creditCardExpiryCVV}>
            <TextInput
              style={styles.creditCardExpiry}
              onChangeText={handleExpiryDateChange}
              value={expiryDate}
              placeholder="MM/YY"
            />
            <TextInput
              style={styles.creditCardCVV}
              onChangeText={handleCVVChange}
              value={cvv}
              placeholder="CVV"
            />
          </View>
          {expiryDateError && <Text style={styles.error}>{expiryDateError}</Text>}
          {cvvError && <Text style={styles.error}>{cvvError}</Text>}
        </View>
      )}
      <View style={styles.billingAddress}>
        <Text style={styles.billingAddressLabel}>Billing Address:</Text>
        <BillingAddress onChange={handleBillingAddressChange} />
      </View>
      <TextInput
        style={styles.emailInput}
        onChangeText={handleEmailChange}
        value={email}
        placeholder="Email"
      />
      <View style={styles.submit}>
        <Text style={styles.submitTotal}>Total: ${total}</Text>
        {paymentOption === 'PayPal' ? (
          <PayPalButton amount={total} onSuccess={handlePayPalSuccess} />
        ) : paymentOption === 'Apple Pay' ? (
          <ApplePayButton amount={total} />
        ) : (
          <Button title="Submit Payment" onPress={() => console.log('Payment submitted')} />
        )}
      </View>
    </View>
    );
    
};    

export default CheckoutPage;



const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    cart: {
      marginBottom: 16,
    },
    cartTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    cartTotal: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8,
    },
    cartTotalLabel: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    cartTotalAmount: {
      fontSize: 18,
    },
    paymentOptions: {
      marginBottom: 16,
    },
    paymentOptionsLabel: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    creditCard: {
      marginBottom: 16,
    },
    creditCardInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      padding: 8,
      marginBottom: 8,
    },
    creditCardExpiryCVV: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    creditCardExpiry: {
      flex: 1,
      marginRight: 8,
    },
    creditCardCVV: {
      flex: 1,
      marginLeft: 8,
    },
    error: {
      color: 'red',
      marginBottom: 8,
    },
    billingAddress: {
      marginBottom: 16,
    },
    billingAddressLabel: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    emailInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      padding: 8,
      marginBottom: 16,
    },
    submit: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    submitTotal: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  */