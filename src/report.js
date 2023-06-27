import React, { useEffect, useState } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import axios from 'axios';

const Report = () => {
  const [customers, setCustomers] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customerResponse = await axios.get('https://company-server-svea.onrender.com/api/getcompany');
        setCustomers(customerResponse.data);

        const companyResponse = await axios.get('https://company-server-svea.onrender.com/api/getinsured');
        setCompanies(companyResponse.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <PDFViewer>
      <Document>
        <Page style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.title}>Customers</Text>
            {customers.map((customer, index) => (
              <View key={index}>
                <Text>Name: {customer.name}</Text>
                <Text>Email: {customer.email}</Text>
                <Text>--------------------------</Text>
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Companies</Text>
            {companies.map((company, index) => (
              <View key={index}>
                <Text>Name: {company.name}</Text>
                <Text>Address: {company.address}</Text>
                <Text>--------------------------</Text>
              </View>
            ))}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    padding: '1cm',
  },
  section: {
    marginBottom: '1cm',
  },
  title: {
    fontSize: '18pt',
    fontWeight: 'bold',
    marginBottom: '0.5cm',
  },
});

export default Report;
