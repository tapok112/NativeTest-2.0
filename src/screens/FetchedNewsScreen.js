import React, {useState, useEffect} from 'react';

import {ScrollView, View, Text, Image, ActivityIndicator} from 'react-native';
import HTMLView from 'react-native-htmlview';
import {Navigation} from 'react-native-navigation';

import Pagination from '../components/helpers/pagination';

import {api} from '../routes/routes';
import {styles} from '../styles/styles-component';

import newsOffline from '../offline/newsOffline.json';
import {TouchableOpacity} from 'react-native';
import {openSideMenu} from '../components/helpers/openSideMenu';

// Комнонент Главного экрана со списком новостей
export default function FetchedNewsScreen({componentId}) {
  const [news, setNews] = useState([]);
  const [currentNews, setCurrentNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);

  const newsPerPage = 10;
  const lastNewsIndex = currentPage * newsPerPage;
  const firstNewsIndex = lastNewsIndex - newsPerPage;

  openSideMenu(componentId);

  const fetchNews = async () => {
    setIsLoading(true);

    const response = await api.news;

    if (response.ok) {
      setNews(response.data.news.concat(response.data.news));
    } else setNews(newsOffline);

    setIsLoading(false);
  };

  const handlePressNewsItem = (newsID, title) => {
    Navigation.push('NEWS_STACK', {
      component: {
        name: 'NewsItemScreen',
        options: {
          topBar: {
            title: {
              text: title,
            },
          },
        },
        passProps: {
          newsID: newsID,
        },
      },
    });
  };

  const onPageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    setCurrentNews(news.slice(firstNewsIndex, lastNewsIndex));
  }, [news, currentPage]);

  return (
    <ScrollView style={styles.newsContainer}>
      {currentNews.map(item => (
        <TouchableOpacity key={item.id}
                          onPress={() => handlePressNewsItem(item.id, item.title)}
                          style={styles.newsCard}>
          <Image style={styles.newsImage}
                 source={{uri: item.image_url}} />

          <View>
            <Text>{item.title}</Text>

            <HTMLView style={{ height: 20 }} value={item.body} />
          </View>
        </TouchableOpacity>
      ))}

      {news.length > 5 && (
        <Pagination newsPerPage={newsPerPage}
                    totalNews={news.length}
                    handleChangePage={onPageChange}
                    currentPage={currentPage} />
      )}

      {isLoading && <View style={styles.loadingIndicator}><ActivityIndicator size="large" /></View>}
    </ScrollView>
  );
}
