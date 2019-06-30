import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import axios from 'axios'

import AlbumDetail from './AlbumDetail'


export default class AlbumList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      albums: []
    }
  }

  async componentDidMount() {
    let response = await axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    this.setState({ albums: response.data })
  }

  _buildAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    )
  }

  render() {
    return (
      <ScrollView>
        {this._buildAlbums()}
      </ScrollView>
    )
  }
}
