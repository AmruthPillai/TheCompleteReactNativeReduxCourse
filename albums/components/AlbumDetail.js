import React from 'react'
import { Text, View, Image, Linking, StyleSheet } from 'react-native'
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, image, url } = album

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image
            style={styles.thumbnail}
            source={{ uri: 'https://i.imgur.com/xQpqv8A.jpg' }} />
        </View>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{title}</Text>
          <Text style={styles.headerSubtitle}>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={styles.image}
          source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          <Text>Buy Now</Text>
        </Button>
      </CardSection>
    </Card>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 6
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#888'
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 6
  },
  thumbnailContainer: {
    paddingLeft: 14,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    width: null,
    height: 400
  }
})


export default AlbumDetail
