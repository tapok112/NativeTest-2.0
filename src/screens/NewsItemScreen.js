import React, {useState, useEffect} from 'react';

import {Image, View, Text} from 'react-native';
import HTMLView from 'react-native-htmlview';

import {api} from '../routes/routes';
import {styles} from '../styles/styles-component';

import newsOffline from '../offline/newsOffline.json';
import {openSideMenu} from '../components/helpers/openSideMenu';

// Компонент экрана с отображением выбранной новости
export default function NewsItemScreen({newsID}) {
  const [newsItem, setNewsItem] = useState([]);

  const fetchNewsItem = async () => {
    const response = await api.selectedNews(newsID);

    if (response.ok) {
      setNewsItem(response.data.news);
    }
    setNewsItem(newsOffline.find(item => item.id === newsID));
  };

  openSideMenu(newsID);

  useEffect(() => {
    fetchNewsItem();
  }, []);

  return (
    <View>
      <Image style={styles.newsImageFull} source={{uri: newsItem.image_url}} />

      <View style={{ justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={{ marginBottom: 20 }}>{newsItem.title}</Text>

        <HTMLView style={{ height: 20 }} value={newsItem.body} />
      </View>
    </View>
  );
}
